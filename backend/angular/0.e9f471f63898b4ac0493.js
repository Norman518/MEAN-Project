(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    cAcB: function (l, n, a) {
      "use strict";
      a.r(n);
      var u = a("CcnG"),
        e = function () {},
        r = a("NcP4"),
        i = a("t68o"),
        t = a("NvT6"),
        o = a("Blfk"),
        d = a("dWZg"),
        c = a("Ip0R"),
        s = a("seP3"),
        p = a("bujt"),
        m = a("UodH"),
        f = a("lLAP"),
        g = a("gIcY"),
        b = a("dJrM"),
        X = a("Wf4p"),
        h = a("Fzqc"),
        _ = a("b716"),
        v = a("/VYK"),
        C = a("lzlj"),
        y = a("FVSy"),
        M = a("qXBG"),
        w = (function () {
          function l(l) {
            (this.authService = l), (this.isLoading = !1);
          }
          return (
            (l.prototype.ngOnInit = function () {
              var l = this;
              this.authStatusSub = this.authService
                .getAuthStatusListener()
                .subscribe(function (n) {
                  l.isLoading = !1;
                });
            }),
            (l.prototype.onLogin = function (l) {
              l.invalid ||
                ((this.isLoading = !0),
                this.authService.login(l.value.email, l.value.password));
            }),
            (l.prototype.ngOnDestroy = function () {
              this.authStatusSub.unsubscribe();
            }),
            l
          );
        })(),
        q = u.La({
          encapsulation: 0,
          styles: [
            [
              "mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}",
            ],
          ],
          data: {},
        });
      function F(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              1,
              "mat-spinner",
              [
                ["class", "mat-spinner mat-progress-spinner"],
                ["mode", "indeterminate"],
                ["role", "progressbar"],
              ],
              [
                [4, "width", "px"],
                [4, "height", "px"],
              ],
              null,
              null,
              t.b,
              t.a
            )),
            u.Ma(1, 49152, null, 0, o.c, [u.k, d.a, [2, c.d]], null, null),
          ],
          null,
          function (l, n) {
            l(n, 0, 0, u.Xa(n, 1).diameter, u.Xa(n, 1).diameter);
          }
        );
      }
      function V(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              2,
              "mat-error",
              [
                ["class", "mat-error"],
                ["role", "alert"],
              ],
              [[1, "id", 0]],
              null,
              null,
              null,
              null
            )),
            u.Ma(1, 16384, [[4, 4]], 0, s.b, [], null, null),
            (l()(), u.eb(-1, null, ["Please enter a valid email."])),
          ],
          null,
          function (l, n) {
            l(n, 0, 0, u.Xa(n, 1).id);
          }
        );
      }
      function I(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              2,
              "mat-error",
              [
                ["class", "mat-error"],
                ["role", "alert"],
              ],
              [[1, "id", 0]],
              null,
              null,
              null,
              null
            )),
            u.Ma(1, 16384, [[11, 4]], 0, s.b, [], null, null),
            (l()(), u.eb(-1, null, ["Please enter a valid password."])),
          ],
          null,
          function (l, n) {
            l(n, 0, 0, u.Xa(n, 1).id);
          }
        );
      }
      function S(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              2,
              "button",
              [
                ["color", "accent"],
                ["mat-raised-button", ""],
                ["type", "submit"],
              ],
              [[8, "disabled", 0]],
              null,
              null,
              p.d,
              p.b
            )),
            u.Ma(
              1,
              180224,
              null,
              0,
              m.b,
              [u.k, d.a, f.c],
              { color: [0, "color"] },
              null
            ),
            (l()(), u.eb(-1, 0, ["Login"])),
          ],
          function (l, n) {
            l(n, 1, 0, "accent");
          },
          function (l, n) {
            l(n, 0, 0, u.Xa(n, 1).disabled || null);
          }
        );
      }
      function k(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              49,
              "form",
              [["novalidate", ""]],
              [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "submit"],
                [null, "reset"],
              ],
              function (l, n, a) {
                var e = !0,
                  r = l.component;
                return (
                  "submit" === n && (e = !1 !== u.Xa(l, 2).onSubmit(a) && e),
                  "reset" === n && (e = !1 !== u.Xa(l, 2).onReset() && e),
                  "submit" === n && (e = !1 !== r.onLogin(u.Xa(l, 2)) && e),
                  e
                );
              },
              null,
              null
            )),
            u.Ma(1, 16384, null, 0, g.v, [], null, null),
            u.Ma(
              2,
              4210688,
              [["loginForm", 4]],
              0,
              g.p,
              [
                [8, null],
                [8, null],
              ],
              null,
              null
            ),
            u.bb(2048, null, g.b, null, [g.p]),
            u.Ma(4, 16384, null, 0, g.o, [[4, g.b]], null, null),
            (l()(),
            u.Na(
              5,
              0,
              null,
              null,
              21,
              "mat-form-field",
              [["class", "mat-form-field"]],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              null,
              null,
              b.b,
              b.a
            )),
            u.Ma(
              6,
              7389184,
              null,
              7,
              s.c,
              [u.k, u.h, [2, X.f], [2, h.b], [2, s.a], d.a],
              null,
              null
            ),
            u.cb(335544320, 1, { _control: 0 }),
            u.cb(335544320, 2, { _placeholderChild: 0 }),
            u.cb(335544320, 3, { _labelChild: 0 }),
            u.cb(603979776, 4, { _errorChildren: 1 }),
            u.cb(603979776, 5, { _hintChildren: 1 }),
            u.cb(603979776, 6, { _prefixChildren: 1 }),
            u.cb(603979776, 7, { _suffixChildren: 1 }),
            (l()(),
            u.Na(
              14,
              0,
              null,
              1,
              10,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["email", ""],
                ["matInput", ""],
                ["name", "email"],
                ["ngModel", ""],
                ["placeholder", "E-Mail"],
                ["required", ""],
                ["type", "email"],
              ],
              [
                [1, "required", 0],
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [8, "readOnly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, a) {
                var e = !0;
                return (
                  "input" === n &&
                    (e = !1 !== u.Xa(l, 18)._handleInput(a.target.value) && e),
                  "blur" === n && (e = !1 !== u.Xa(l, 18).onTouched() && e),
                  "compositionstart" === n &&
                    (e = !1 !== u.Xa(l, 18)._compositionStart() && e),
                  "compositionend" === n &&
                    (e =
                      !1 !== u.Xa(l, 18)._compositionEnd(a.target.value) && e),
                  "blur" === n &&
                    (e = !1 !== u.Xa(l, 22)._focusChanged(!1) && e),
                  "focus" === n &&
                    (e = !1 !== u.Xa(l, 22)._focusChanged(!0) && e),
                  "input" === n && (e = !1 !== u.Xa(l, 22)._onInput() && e),
                  e
                );
              },
              null,
              null
            )),
            u.Ma(
              15,
              16384,
              null,
              0,
              g.s,
              [],
              { required: [0, "required"] },
              null
            ),
            u.Ma(16, 16384, null, 0, g.d, [], { email: [0, "email"] }, null),
            u.bb(
              1024,
              null,
              g.k,
              function (l, n) {
                return [l, n];
              },
              [g.s, g.d]
            ),
            u.Ma(18, 16384, null, 0, g.c, [u.C, u.k, [2, g.a]], null, null),
            u.bb(
              1024,
              null,
              g.l,
              function (l) {
                return [l];
              },
              [g.c]
            ),
            u.Ma(
              20,
              671744,
              [["emailInput", 4]],
              0,
              g.q,
              [
                [2, g.b],
                [6, g.k],
                [8, null],
                [6, g.l],
              ],
              { name: [0, "name"], model: [1, "model"] },
              null
            ),
            u.bb(2048, null, g.m, null, [g.q]),
            u.Ma(
              22,
              999424,
              null,
              0,
              _.a,
              [
                u.k,
                d.a,
                [6, g.m],
                [2, g.p],
                [2, g.i],
                X.b,
                [8, null],
                v.a,
                u.x,
              ],
              {
                placeholder: [0, "placeholder"],
                required: [1, "required"],
                type: [2, "type"],
              },
              null
            ),
            u.Ma(23, 16384, null, 0, g.n, [[4, g.m]], null, null),
            u.bb(2048, [[1, 4]], s.d, null, [_.a]),
            (l()(), u.Fa(16777216, null, 5, 1, null, V)),
            u.Ma(
              26,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            u.Na(
              27,
              0,
              null,
              null,
              20,
              "mat-form-field",
              [["class", "mat-form-field"]],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              null,
              null,
              b.b,
              b.a
            )),
            u.Ma(
              28,
              7389184,
              null,
              7,
              s.c,
              [u.k, u.h, [2, X.f], [2, h.b], [2, s.a], d.a],
              null,
              null
            ),
            u.cb(335544320, 8, { _control: 0 }),
            u.cb(335544320, 9, { _placeholderChild: 0 }),
            u.cb(335544320, 10, { _labelChild: 0 }),
            u.cb(603979776, 11, { _errorChildren: 1 }),
            u.cb(603979776, 12, { _hintChildren: 1 }),
            u.cb(603979776, 13, { _prefixChildren: 1 }),
            u.cb(603979776, 14, { _suffixChildren: 1 }),
            (l()(),
            u.Na(
              36,
              0,
              null,
              1,
              9,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
                ["name", "password"],
                ["ngModel", ""],
                ["placeholder", "Password"],
                ["required", ""],
                ["type", "password"],
              ],
              [
                [1, "required", 0],
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [8, "readOnly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, a) {
                var e = !0;
                return (
                  "input" === n &&
                    (e = !1 !== u.Xa(l, 39)._handleInput(a.target.value) && e),
                  "blur" === n && (e = !1 !== u.Xa(l, 39).onTouched() && e),
                  "compositionstart" === n &&
                    (e = !1 !== u.Xa(l, 39)._compositionStart() && e),
                  "compositionend" === n &&
                    (e =
                      !1 !== u.Xa(l, 39)._compositionEnd(a.target.value) && e),
                  "blur" === n &&
                    (e = !1 !== u.Xa(l, 43)._focusChanged(!1) && e),
                  "focus" === n &&
                    (e = !1 !== u.Xa(l, 43)._focusChanged(!0) && e),
                  "input" === n && (e = !1 !== u.Xa(l, 43)._onInput() && e),
                  e
                );
              },
              null,
              null
            )),
            u.Ma(
              37,
              16384,
              null,
              0,
              g.s,
              [],
              { required: [0, "required"] },
              null
            ),
            u.bb(
              1024,
              null,
              g.k,
              function (l) {
                return [l];
              },
              [g.s]
            ),
            u.Ma(39, 16384, null, 0, g.c, [u.C, u.k, [2, g.a]], null, null),
            u.bb(
              1024,
              null,
              g.l,
              function (l) {
                return [l];
              },
              [g.c]
            ),
            u.Ma(
              41,
              671744,
              [["passwordInput", 4]],
              0,
              g.q,
              [
                [2, g.b],
                [6, g.k],
                [8, null],
                [6, g.l],
              ],
              { name: [0, "name"], model: [1, "model"] },
              null
            ),
            u.bb(2048, null, g.m, null, [g.q]),
            u.Ma(
              43,
              999424,
              null,
              0,
              _.a,
              [
                u.k,
                d.a,
                [6, g.m],
                [2, g.p],
                [2, g.i],
                X.b,
                [8, null],
                v.a,
                u.x,
              ],
              {
                placeholder: [0, "placeholder"],
                required: [1, "required"],
                type: [2, "type"],
              },
              null
            ),
            u.Ma(44, 16384, null, 0, g.n, [[4, g.m]], null, null),
            u.bb(2048, [[8, 4]], s.d, null, [_.a]),
            (l()(), u.Fa(16777216, null, 5, 1, null, I)),
            u.Ma(
              47,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(), u.Fa(16777216, null, null, 1, null, S)),
            u.Ma(
              49,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
          ],
          function (l, n) {
            var a = n.component;
            l(n, 15, 0, ""),
              l(n, 16, 0, ""),
              l(n, 20, 0, "email", ""),
              l(n, 22, 0, "E-Mail", "", "email"),
              l(n, 26, 0, u.Xa(n, 20).invalid),
              l(n, 37, 0, ""),
              l(n, 41, 0, "password", ""),
              l(n, 43, 0, "Password", "", "password"),
              l(n, 47, 0, u.Xa(n, 41).invalid),
              l(n, 49, 0, !a.isLoading);
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              u.Xa(n, 4).ngClassUntouched,
              u.Xa(n, 4).ngClassTouched,
              u.Xa(n, 4).ngClassPristine,
              u.Xa(n, 4).ngClassDirty,
              u.Xa(n, 4).ngClassValid,
              u.Xa(n, 4).ngClassInvalid,
              u.Xa(n, 4).ngClassPending
            ),
              l(n, 5, 1, [
                "standard" == u.Xa(n, 6).appearance,
                "fill" == u.Xa(n, 6).appearance,
                "outline" == u.Xa(n, 6).appearance,
                "legacy" == u.Xa(n, 6).appearance,
                u.Xa(n, 6)._control.errorState,
                u.Xa(n, 6)._canLabelFloat,
                u.Xa(n, 6)._shouldLabelFloat(),
                u.Xa(n, 6)._hideControlPlaceholder(),
                u.Xa(n, 6)._control.disabled,
                u.Xa(n, 6)._control.autofilled,
                u.Xa(n, 6)._control.focused,
                "accent" == u.Xa(n, 6).color,
                "warn" == u.Xa(n, 6).color,
                u.Xa(n, 6)._shouldForward("untouched"),
                u.Xa(n, 6)._shouldForward("touched"),
                u.Xa(n, 6)._shouldForward("pristine"),
                u.Xa(n, 6)._shouldForward("dirty"),
                u.Xa(n, 6)._shouldForward("valid"),
                u.Xa(n, 6)._shouldForward("invalid"),
                u.Xa(n, 6)._shouldForward("pending"),
              ]),
              l(n, 14, 1, [
                u.Xa(n, 15).required ? "" : null,
                u.Xa(n, 22)._isServer,
                u.Xa(n, 22).id,
                u.Xa(n, 22).placeholder,
                u.Xa(n, 22).disabled,
                u.Xa(n, 22).required,
                u.Xa(n, 22).readonly,
                u.Xa(n, 22)._ariaDescribedby || null,
                u.Xa(n, 22).errorState,
                u.Xa(n, 22).required.toString(),
                u.Xa(n, 23).ngClassUntouched,
                u.Xa(n, 23).ngClassTouched,
                u.Xa(n, 23).ngClassPristine,
                u.Xa(n, 23).ngClassDirty,
                u.Xa(n, 23).ngClassValid,
                u.Xa(n, 23).ngClassInvalid,
                u.Xa(n, 23).ngClassPending,
              ]),
              l(n, 27, 1, [
                "standard" == u.Xa(n, 28).appearance,
                "fill" == u.Xa(n, 28).appearance,
                "outline" == u.Xa(n, 28).appearance,
                "legacy" == u.Xa(n, 28).appearance,
                u.Xa(n, 28)._control.errorState,
                u.Xa(n, 28)._canLabelFloat,
                u.Xa(n, 28)._shouldLabelFloat(),
                u.Xa(n, 28)._hideControlPlaceholder(),
                u.Xa(n, 28)._control.disabled,
                u.Xa(n, 28)._control.autofilled,
                u.Xa(n, 28)._control.focused,
                "accent" == u.Xa(n, 28).color,
                "warn" == u.Xa(n, 28).color,
                u.Xa(n, 28)._shouldForward("untouched"),
                u.Xa(n, 28)._shouldForward("touched"),
                u.Xa(n, 28)._shouldForward("pristine"),
                u.Xa(n, 28)._shouldForward("dirty"),
                u.Xa(n, 28)._shouldForward("valid"),
                u.Xa(n, 28)._shouldForward("invalid"),
                u.Xa(n, 28)._shouldForward("pending"),
              ]),
              l(n, 36, 1, [
                u.Xa(n, 37).required ? "" : null,
                u.Xa(n, 43)._isServer,
                u.Xa(n, 43).id,
                u.Xa(n, 43).placeholder,
                u.Xa(n, 43).disabled,
                u.Xa(n, 43).required,
                u.Xa(n, 43).readonly,
                u.Xa(n, 43)._ariaDescribedby || null,
                u.Xa(n, 43).errorState,
                u.Xa(n, 43).required.toString(),
                u.Xa(n, 44).ngClassUntouched,
                u.Xa(n, 44).ngClassTouched,
                u.Xa(n, 44).ngClassPristine,
                u.Xa(n, 44).ngClassDirty,
                u.Xa(n, 44).ngClassValid,
                u.Xa(n, 44).ngClassInvalid,
                u.Xa(n, 44).ngClassPending,
              ]);
          }
        );
      }
      function N(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              5,
              "mat-card",
              [["class", "mat-card"]],
              null,
              null,
              null,
              C.b,
              C.a
            )),
            u.Ma(1, 49152, null, 0, y.a, [], null, null),
            (l()(), u.Fa(16777216, null, 0, 1, null, F)),
            u.Ma(
              3,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(), u.Fa(16777216, null, 0, 1, null, k)),
            u.Ma(
              5,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
          ],
          function (l, n) {
            var a = n.component;
            l(n, 3, 0, a.isLoading), l(n, 5, 0, !a.isLoading);
          },
          null
        );
      }
      var P = u.Ja(
          "ng-component",
          w,
          function (l) {
            return u.gb(
              0,
              [
                (l()(),
                u.Na(
                  0,
                  0,
                  null,
                  null,
                  1,
                  "ng-component",
                  [],
                  null,
                  null,
                  null,
                  N,
                  q
                )),
                u.Ma(1, 245760, null, 0, w, [M.a], null, null),
              ],
              function (l, n) {
                l(n, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        L = (function () {
          function l(l) {
            (this.authService = l), (this.isLoading = !1);
          }
          return (
            (l.prototype.ngOnInit = function () {
              var l = this;
              this.authStatusSub = this.authService
                .getAuthStatusListener()
                .subscribe(function (n) {
                  l.isLoading = !1;
                });
            }),
            (l.prototype.onSignup = function (l) {
              l.invalid ||
                ((this.isLoading = !0),
                this.authService.createUser(l.value.email, l.value.password));
            }),
            (l.prototype.ngOnDestroy = function () {
              this.authStatusSub.unsubscribe();
            }),
            l
          );
        })(),
        x = u.La({
          encapsulation: 0,
          styles: [
            [
              "mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}",
            ],
          ],
          data: {},
        });
      function D(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              1,
              "mat-spinner",
              [
                ["class", "mat-spinner mat-progress-spinner"],
                ["mode", "indeterminate"],
                ["role", "progressbar"],
              ],
              [
                [4, "width", "px"],
                [4, "height", "px"],
              ],
              null,
              null,
              t.b,
              t.a
            )),
            u.Ma(1, 49152, null, 0, o.c, [u.k, d.a, [2, c.d]], null, null),
          ],
          null,
          function (l, n) {
            l(n, 0, 0, u.Xa(n, 1).diameter, u.Xa(n, 1).diameter);
          }
        );
      }
      function O(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              2,
              "mat-error",
              [
                ["class", "mat-error"],
                ["role", "alert"],
              ],
              [[1, "id", 0]],
              null,
              null,
              null,
              null
            )),
            u.Ma(1, 16384, [[4, 4]], 0, s.b, [], null, null),
            (l()(), u.eb(-1, null, ["Please enter a valid email."])),
          ],
          null,
          function (l, n) {
            l(n, 0, 0, u.Xa(n, 1).id);
          }
        );
      }
      function j(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              2,
              "mat-error",
              [
                ["class", "mat-error"],
                ["role", "alert"],
              ],
              [[1, "id", 0]],
              null,
              null,
              null,
              null
            )),
            u.Ma(1, 16384, [[11, 4]], 0, s.b, [], null, null),
            (l()(), u.eb(-1, null, ["Please enter a valid password."])),
          ],
          null,
          function (l, n) {
            l(n, 0, 0, u.Xa(n, 1).id);
          }
        );
      }
      function K(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              2,
              "button",
              [
                ["color", "accent"],
                ["mat-raised-button", ""],
                ["type", "submit"],
              ],
              [[8, "disabled", 0]],
              null,
              null,
              p.d,
              p.b
            )),
            u.Ma(
              1,
              180224,
              null,
              0,
              m.b,
              [u.k, d.a, f.c],
              { color: [0, "color"] },
              null
            ),
            (l()(), u.eb(-1, 0, ["Signup"])),
          ],
          function (l, n) {
            l(n, 1, 0, "accent");
          },
          function (l, n) {
            l(n, 0, 0, u.Xa(n, 1).disabled || null);
          }
        );
      }
      function T(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              49,
              "form",
              [["novalidate", ""]],
              [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "submit"],
                [null, "reset"],
              ],
              function (l, n, a) {
                var e = !0,
                  r = l.component;
                return (
                  "submit" === n && (e = !1 !== u.Xa(l, 2).onSubmit(a) && e),
                  "reset" === n && (e = !1 !== u.Xa(l, 2).onReset() && e),
                  "submit" === n && (e = !1 !== r.onSignup(u.Xa(l, 2)) && e),
                  e
                );
              },
              null,
              null
            )),
            u.Ma(1, 16384, null, 0, g.v, [], null, null),
            u.Ma(
              2,
              4210688,
              [["signupForm", 4]],
              0,
              g.p,
              [
                [8, null],
                [8, null],
              ],
              null,
              null
            ),
            u.bb(2048, null, g.b, null, [g.p]),
            u.Ma(4, 16384, null, 0, g.o, [[4, g.b]], null, null),
            (l()(),
            u.Na(
              5,
              0,
              null,
              null,
              21,
              "mat-form-field",
              [["class", "mat-form-field"]],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              null,
              null,
              b.b,
              b.a
            )),
            u.Ma(
              6,
              7389184,
              null,
              7,
              s.c,
              [u.k, u.h, [2, X.f], [2, h.b], [2, s.a], d.a],
              null,
              null
            ),
            u.cb(335544320, 1, { _control: 0 }),
            u.cb(335544320, 2, { _placeholderChild: 0 }),
            u.cb(335544320, 3, { _labelChild: 0 }),
            u.cb(603979776, 4, { _errorChildren: 1 }),
            u.cb(603979776, 5, { _hintChildren: 1 }),
            u.cb(603979776, 6, { _prefixChildren: 1 }),
            u.cb(603979776, 7, { _suffixChildren: 1 }),
            (l()(),
            u.Na(
              14,
              0,
              null,
              1,
              10,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["email", ""],
                ["matInput", ""],
                ["name", "email"],
                ["ngModel", ""],
                ["placeholder", "E-Mail"],
                ["required", ""],
                ["type", "email"],
              ],
              [
                [1, "required", 0],
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [8, "readOnly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, a) {
                var e = !0;
                return (
                  "input" === n &&
                    (e = !1 !== u.Xa(l, 18)._handleInput(a.target.value) && e),
                  "blur" === n && (e = !1 !== u.Xa(l, 18).onTouched() && e),
                  "compositionstart" === n &&
                    (e = !1 !== u.Xa(l, 18)._compositionStart() && e),
                  "compositionend" === n &&
                    (e =
                      !1 !== u.Xa(l, 18)._compositionEnd(a.target.value) && e),
                  "blur" === n &&
                    (e = !1 !== u.Xa(l, 22)._focusChanged(!1) && e),
                  "focus" === n &&
                    (e = !1 !== u.Xa(l, 22)._focusChanged(!0) && e),
                  "input" === n && (e = !1 !== u.Xa(l, 22)._onInput() && e),
                  e
                );
              },
              null,
              null
            )),
            u.Ma(
              15,
              16384,
              null,
              0,
              g.s,
              [],
              { required: [0, "required"] },
              null
            ),
            u.Ma(16, 16384, null, 0, g.d, [], { email: [0, "email"] }, null),
            u.bb(
              1024,
              null,
              g.k,
              function (l, n) {
                return [l, n];
              },
              [g.s, g.d]
            ),
            u.Ma(18, 16384, null, 0, g.c, [u.C, u.k, [2, g.a]], null, null),
            u.bb(
              1024,
              null,
              g.l,
              function (l) {
                return [l];
              },
              [g.c]
            ),
            u.Ma(
              20,
              671744,
              [["emailInput", 4]],
              0,
              g.q,
              [
                [2, g.b],
                [6, g.k],
                [8, null],
                [6, g.l],
              ],
              { name: [0, "name"], model: [1, "model"] },
              null
            ),
            u.bb(2048, null, g.m, null, [g.q]),
            u.Ma(
              22,
              999424,
              null,
              0,
              _.a,
              [
                u.k,
                d.a,
                [6, g.m],
                [2, g.p],
                [2, g.i],
                X.b,
                [8, null],
                v.a,
                u.x,
              ],
              {
                placeholder: [0, "placeholder"],
                required: [1, "required"],
                type: [2, "type"],
              },
              null
            ),
            u.Ma(23, 16384, null, 0, g.n, [[4, g.m]], null, null),
            u.bb(2048, [[1, 4]], s.d, null, [_.a]),
            (l()(), u.Fa(16777216, null, 5, 1, null, O)),
            u.Ma(
              26,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            u.Na(
              27,
              0,
              null,
              null,
              20,
              "mat-form-field",
              [["class", "mat-form-field"]],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              null,
              null,
              b.b,
              b.a
            )),
            u.Ma(
              28,
              7389184,
              null,
              7,
              s.c,
              [u.k, u.h, [2, X.f], [2, h.b], [2, s.a], d.a],
              null,
              null
            ),
            u.cb(335544320, 8, { _control: 0 }),
            u.cb(335544320, 9, { _placeholderChild: 0 }),
            u.cb(335544320, 10, { _labelChild: 0 }),
            u.cb(603979776, 11, { _errorChildren: 1 }),
            u.cb(603979776, 12, { _hintChildren: 1 }),
            u.cb(603979776, 13, { _prefixChildren: 1 }),
            u.cb(603979776, 14, { _suffixChildren: 1 }),
            (l()(),
            u.Na(
              36,
              0,
              null,
              1,
              9,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
                ["name", "password"],
                ["ngModel", ""],
                ["placeholder", "Password"],
                ["required", ""],
                ["type", "password"],
              ],
              [
                [1, "required", 0],
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [8, "readOnly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, a) {
                var e = !0;
                return (
                  "input" === n &&
                    (e = !1 !== u.Xa(l, 39)._handleInput(a.target.value) && e),
                  "blur" === n && (e = !1 !== u.Xa(l, 39).onTouched() && e),
                  "compositionstart" === n &&
                    (e = !1 !== u.Xa(l, 39)._compositionStart() && e),
                  "compositionend" === n &&
                    (e =
                      !1 !== u.Xa(l, 39)._compositionEnd(a.target.value) && e),
                  "blur" === n &&
                    (e = !1 !== u.Xa(l, 43)._focusChanged(!1) && e),
                  "focus" === n &&
                    (e = !1 !== u.Xa(l, 43)._focusChanged(!0) && e),
                  "input" === n && (e = !1 !== u.Xa(l, 43)._onInput() && e),
                  e
                );
              },
              null,
              null
            )),
            u.Ma(
              37,
              16384,
              null,
              0,
              g.s,
              [],
              { required: [0, "required"] },
              null
            ),
            u.bb(
              1024,
              null,
              g.k,
              function (l) {
                return [l];
              },
              [g.s]
            ),
            u.Ma(39, 16384, null, 0, g.c, [u.C, u.k, [2, g.a]], null, null),
            u.bb(
              1024,
              null,
              g.l,
              function (l) {
                return [l];
              },
              [g.c]
            ),
            u.Ma(
              41,
              671744,
              [["passwordInput", 4]],
              0,
              g.q,
              [
                [2, g.b],
                [6, g.k],
                [8, null],
                [6, g.l],
              ],
              { name: [0, "name"], model: [1, "model"] },
              null
            ),
            u.bb(2048, null, g.m, null, [g.q]),
            u.Ma(
              43,
              999424,
              null,
              0,
              _.a,
              [
                u.k,
                d.a,
                [6, g.m],
                [2, g.p],
                [2, g.i],
                X.b,
                [8, null],
                v.a,
                u.x,
              ],
              {
                placeholder: [0, "placeholder"],
                required: [1, "required"],
                type: [2, "type"],
              },
              null
            ),
            u.Ma(44, 16384, null, 0, g.n, [[4, g.m]], null, null),
            u.bb(2048, [[8, 4]], s.d, null, [_.a]),
            (l()(), u.Fa(16777216, null, 5, 1, null, j)),
            u.Ma(
              47,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(), u.Fa(16777216, null, null, 1, null, K)),
            u.Ma(
              49,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
          ],
          function (l, n) {
            var a = n.component;
            l(n, 15, 0, ""),
              l(n, 16, 0, ""),
              l(n, 20, 0, "email", ""),
              l(n, 22, 0, "E-Mail", "", "email"),
              l(n, 26, 0, u.Xa(n, 20).invalid),
              l(n, 37, 0, ""),
              l(n, 41, 0, "password", ""),
              l(n, 43, 0, "Password", "", "password"),
              l(n, 47, 0, u.Xa(n, 41).invalid),
              l(n, 49, 0, !a.isLoading);
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              u.Xa(n, 4).ngClassUntouched,
              u.Xa(n, 4).ngClassTouched,
              u.Xa(n, 4).ngClassPristine,
              u.Xa(n, 4).ngClassDirty,
              u.Xa(n, 4).ngClassValid,
              u.Xa(n, 4).ngClassInvalid,
              u.Xa(n, 4).ngClassPending
            ),
              l(n, 5, 1, [
                "standard" == u.Xa(n, 6).appearance,
                "fill" == u.Xa(n, 6).appearance,
                "outline" == u.Xa(n, 6).appearance,
                "legacy" == u.Xa(n, 6).appearance,
                u.Xa(n, 6)._control.errorState,
                u.Xa(n, 6)._canLabelFloat,
                u.Xa(n, 6)._shouldLabelFloat(),
                u.Xa(n, 6)._hideControlPlaceholder(),
                u.Xa(n, 6)._control.disabled,
                u.Xa(n, 6)._control.autofilled,
                u.Xa(n, 6)._control.focused,
                "accent" == u.Xa(n, 6).color,
                "warn" == u.Xa(n, 6).color,
                u.Xa(n, 6)._shouldForward("untouched"),
                u.Xa(n, 6)._shouldForward("touched"),
                u.Xa(n, 6)._shouldForward("pristine"),
                u.Xa(n, 6)._shouldForward("dirty"),
                u.Xa(n, 6)._shouldForward("valid"),
                u.Xa(n, 6)._shouldForward("invalid"),
                u.Xa(n, 6)._shouldForward("pending"),
              ]),
              l(n, 14, 1, [
                u.Xa(n, 15).required ? "" : null,
                u.Xa(n, 22)._isServer,
                u.Xa(n, 22).id,
                u.Xa(n, 22).placeholder,
                u.Xa(n, 22).disabled,
                u.Xa(n, 22).required,
                u.Xa(n, 22).readonly,
                u.Xa(n, 22)._ariaDescribedby || null,
                u.Xa(n, 22).errorState,
                u.Xa(n, 22).required.toString(),
                u.Xa(n, 23).ngClassUntouched,
                u.Xa(n, 23).ngClassTouched,
                u.Xa(n, 23).ngClassPristine,
                u.Xa(n, 23).ngClassDirty,
                u.Xa(n, 23).ngClassValid,
                u.Xa(n, 23).ngClassInvalid,
                u.Xa(n, 23).ngClassPending,
              ]),
              l(n, 27, 1, [
                "standard" == u.Xa(n, 28).appearance,
                "fill" == u.Xa(n, 28).appearance,
                "outline" == u.Xa(n, 28).appearance,
                "legacy" == u.Xa(n, 28).appearance,
                u.Xa(n, 28)._control.errorState,
                u.Xa(n, 28)._canLabelFloat,
                u.Xa(n, 28)._shouldLabelFloat(),
                u.Xa(n, 28)._hideControlPlaceholder(),
                u.Xa(n, 28)._control.disabled,
                u.Xa(n, 28)._control.autofilled,
                u.Xa(n, 28)._control.focused,
                "accent" == u.Xa(n, 28).color,
                "warn" == u.Xa(n, 28).color,
                u.Xa(n, 28)._shouldForward("untouched"),
                u.Xa(n, 28)._shouldForward("touched"),
                u.Xa(n, 28)._shouldForward("pristine"),
                u.Xa(n, 28)._shouldForward("dirty"),
                u.Xa(n, 28)._shouldForward("valid"),
                u.Xa(n, 28)._shouldForward("invalid"),
                u.Xa(n, 28)._shouldForward("pending"),
              ]),
              l(n, 36, 1, [
                u.Xa(n, 37).required ? "" : null,
                u.Xa(n, 43)._isServer,
                u.Xa(n, 43).id,
                u.Xa(n, 43).placeholder,
                u.Xa(n, 43).disabled,
                u.Xa(n, 43).required,
                u.Xa(n, 43).readonly,
                u.Xa(n, 43)._ariaDescribedby || null,
                u.Xa(n, 43).errorState,
                u.Xa(n, 43).required.toString(),
                u.Xa(n, 44).ngClassUntouched,
                u.Xa(n, 44).ngClassTouched,
                u.Xa(n, 44).ngClassPristine,
                u.Xa(n, 44).ngClassDirty,
                u.Xa(n, 44).ngClassValid,
                u.Xa(n, 44).ngClassInvalid,
                u.Xa(n, 44).ngClassPending,
              ]);
          }
        );
      }
      function U(l) {
        return u.gb(
          0,
          [
            (l()(),
            u.Na(
              0,
              0,
              null,
              null,
              5,
              "mat-card",
              [["class", "mat-card"]],
              null,
              null,
              null,
              C.b,
              C.a
            )),
            u.Ma(1, 49152, null, 0, y.a, [], null, null),
            (l()(), u.Fa(16777216, null, 0, 1, null, D)),
            u.Ma(
              3,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(), u.Fa(16777216, null, 0, 1, null, T)),
            u.Ma(
              5,
              16384,
              null,
              0,
              c.k,
              [u.N, u.K],
              { ngIf: [0, "ngIf"] },
              null
            ),
          ],
          function (l, n) {
            var a = n.component;
            l(n, 3, 0, a.isLoading), l(n, 5, 0, !a.isLoading);
          },
          null
        );
      }
      var E = u.Ja(
          "ng-component",
          L,
          function (l) {
            return u.gb(
              0,
              [
                (l()(),
                u.Na(
                  0,
                  0,
                  null,
                  null,
                  1,
                  "ng-component",
                  [],
                  null,
                  null,
                  null,
                  U,
                  x
                )),
                u.Ma(1, 245760, null, 0, L, [M.a], null, null),
              ],
              function (l, n) {
                l(n, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        A = a("eDkP"),
        J = a("uGex"),
        Y = a("4epT"),
        B = a("o3x0"),
        G = a("8mMr"),
        R = a("YhbO"),
        Z = a("4c35"),
        z = a("jlZm"),
        W = a("qAlS"),
        H = a("v9Dh"),
        Q = a("rhD1"),
        $ = a("ZYCi"),
        ll = function () {};
      a.d(n, "AuthModuleNgFactory", function () {
        return nl;
      });
      var nl = u.Ka(e, [], function (l) {
        return u.Ua([
          u.Va(512, u.j, u.Aa, [[8, [r.a, i.a, P, E]], [3, u.j], u.v]),
          u.Va(4608, c.m, c.l, [u.s, [2, c.u]]),
          u.Va(4608, X.b, X.b, []),
          u.Va(4608, A.c, A.c, [A.i, A.e, u.j, A.h, A.f, u.p, u.x, c.d, h.b]),
          u.Va(5120, J.a, J.b, [A.c]),
          u.Va(5120, Y.c, Y.a, [[3, Y.c]]),
          u.Va(5120, B.c, B.d, [A.c]),
          u.Va(4608, B.e, B.e, [
            A.c,
            u.p,
            [2, c.g],
            [2, B.b],
            B.c,
            [3, B.e],
            A.e,
          ]),
          u.Va(4608, g.w, g.w, []),
          u.Va(1073742336, c.c, c.c, []),
          u.Va(1073742336, d.b, d.b, []),
          u.Va(1073742336, v.c, v.c, []),
          u.Va(1073742336, s.e, s.e, []),
          u.Va(1073742336, _.b, _.b, []),
          u.Va(1073742336, h.a, h.a, []),
          u.Va(1073742336, X.j, X.j, [[2, X.c]]),
          u.Va(1073742336, y.c, y.c, []),
          u.Va(1073742336, X.s, X.s, []),
          u.Va(1073742336, m.c, m.c, []),
          u.Va(1073742336, G.b, G.b, []),
          u.Va(1073742336, R.c, R.c, []),
          u.Va(1073742336, Z.f, Z.f, []),
          u.Va(1073742336, z.b, z.b, []),
          u.Va(1073742336, o.b, o.b, []),
          u.Va(1073742336, W.a, W.a, []),
          u.Va(1073742336, A.g, A.g, []),
          u.Va(1073742336, X.q, X.q, []),
          u.Va(1073742336, X.o, X.o, []),
          u.Va(1073742336, J.d, J.d, []),
          u.Va(1073742336, H.d, H.d, []),
          u.Va(1073742336, Y.d, Y.d, []),
          u.Va(1073742336, B.j, B.j, []),
          u.Va(1073742336, Q.a, Q.a, []),
          u.Va(1073742336, g.u, g.u, []),
          u.Va(1073742336, g.j, g.j, []),
          u.Va(1073742336, $.n, $.n, [
            [2, $.s],
            [2, $.k],
          ]),
          u.Va(1073742336, ll, ll, []),
          u.Va(1073742336, e, e, []),
          u.Va(
            1024,
            $.i,
            function () {
              return [
                [
                  { path: "login", component: w },
                  { path: "signup", component: L },
                ],
              ];
            },
            []
          ),
        ]);
      });
    },
  },
]);
