import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthAdminRefreshGuard extends AuthGuard('jwt-admin-refresh-token') { }