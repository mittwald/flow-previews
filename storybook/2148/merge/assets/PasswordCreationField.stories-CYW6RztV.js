import{r as w,j as r}from"./iframe-C2UJ9G9V.js";import{c as p,u as f,F as h,t as y}from"./Form-BD_PnNUm.js";import{L as i}from"./Label-BBN4mcuG.js";import{R as x,S as b}from"./ResetButton-3y2610P3.js";import{B as t}from"./Button-yv3wqtk5.js";import{S as B,s as F}from"./Section-CBuaZusl.js";import{A as S}from"./ActionGroup-CNhMYjm6.js";import{ay as g,az as E,j as C,ao as n,aA as o,aB as R,F as V}from"./Modal-C3GlUU69.js";import"./index-nuYtCEEu.js";import"./dynamic-CtYtQruH.js";import"./flowComponent-BtVUgkFH.js";import"./index-CG7Nx2SL.js";import"./clsx-B-dksMZM.js";import"./index-CuKGAAd3.js";import"./useLocalizedStringFormatter-Cj5LaI8a.js";import"./context-2O4QHQV-.js";import"./browser-CXIjdJ2N.js";import"./utils-ZVY4AxNZ.js";import"./ProgressBar-ClZTUzWw.js";import"./Hidden-3aP1klpL.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DZ2M7osE.js";import"./Text-BmY25DFr.js";import"./EmulatedBoldText-T6xRvrrg.js";import"./LoadingSpinner-bmxeb1W_.js";import"./Button-ubiq7Xl0.js";import"./useFocusRing-Di5E6gYC.js";import"./useFocusable-xso9xERq.js";import"./context-BIEfUQ2p.js";import"./RSPContexts-Hx65IcT5.js";import"./Collection-Bq2Hdn5d.js";import"./CollectionBuilder-CT2X_xMF.js";import"./SelectionIndicator-NBUBArhq.js";import"./Separator-BRqnt4hv.js";import"./useStatic-CnL7CFtT.js";import"./FileCardList-Bg7rGpmm.js";import"./Avatar-CotRFKhH.js";import"./AlertIcon-BbdcFEUV.js";import"./Image-tSUEQh2P.js";import"./Link-Ly3EXSZu.js";import"./ControlledNotification-Dern2fya.js";import"./Flex-BEFrt-IQ.js";import"./Accordion-QhUZXNHp.js";import"./Alert-Ds8X36u1.js";import"./AlertBadge-ZeNZ0VBj.js";import"./Align-D_gCoYIj.js";import"./AvatarStack-CbwTqXtu.js";import"./BigNumber-Cd2Z6V7G.js";import"./Breadcrumb-DAcj-pff.js";import"./Heading-97bPXynU.js";import"./Legend-D3nPJFkg.js";import"./Color-vKPfJuGH.js";import"./TableFooterRow-BuUJOBvV.js";import"./SkeletonText-DO08ACrp.js";import"./Content-DSkO-Fju.js";import"./CounterBadge-D7aLAN66.js";import"./DonutChart-BN1DSipU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-0iALzZOv.js";import"./Header-z3h4vRWi.js";import"./Initials-CJIq7z5p.js";import"./InlineCode-74OZ_Ktz.js";import"./LayoutCard-8TwEToQW.js";import"./Separator-3tE_TyTR.js";import"./MessageSeparator-UlRvzTWs.js";import"./NavigationGroup-gQIxKXiZ.js";import"./Notification-CJ42Iq6R.js";import"./NotificationProvider-C9_-azBV.js";import"./ProgressBar-DJi-krNr.js";import"./Rating-BgPI6MEV.js";import"./Skeleton-qOcpVc7f.js";const P=(e=g)=>{const a=w.useMemo(()=>E.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return C(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:L}=__STORYBOOK_MODULE_ACTIONS__,v=L("submit"),j={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[R.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Zr={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const e=async s=>{await F(1e3),v(s)},a=f({defaultValues:{user:""}}),m=y();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(B,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:P()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(S,{children:[r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(p,{rules:{required:!0,validate:P(j)},name:"password",children:r.jsxs(n,{validationPolicy:j,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return w.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},c={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <PasswordCreationField defaultValue={""} isInvalid>
          <Label>Password</Label>
          <Button>asd</Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </PasswordCreationField>
        <PasswordCreationField defaultValue={""}>
          <Label>Password</Label>
          <Button>asd</Button>
        </PasswordCreationField>
      </Form>;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const Jr=["Default","WithForm","WithFieldError","WithFocus"];export{l as Default,u as WithFieldError,c as WithFocus,d as WithForm,Jr as __namedExportsOrder,Zr as default};
