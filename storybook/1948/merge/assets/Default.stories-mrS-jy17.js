import{r as M,j as r}from"./iframe-DT0a5lsj.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BtQMQaCQ.js";import{L as P}from"./Label-Dszv3nJ4.js";import{u as N,F as z,a as U}from"./Form-CDOymGpF.js";import{s as Y}from"./Action-DYEDj9x0.js";import{B as h}from"./Button-BnKE_3tA.js";import{m as Z}from"./IconWarning-CP_9phWh.js";import{C as G}from"./CopyButton-BXeER9-V.js";import"./PropsContextProvider-BRdZcbMx.js";import"./mergeRefs-DYr4rTQb.js";import"./index-CAMy4aIT.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Ccza_qSZ.js";import"./utils-BDe-fZfW.js";import"./Text-C8QSq9Z3.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-MdCfc2bT.js";import"./Hidden-CjrJVhTe.js";import"./useFocusRing-_XF1QxIj.js";import"./useFocus-BPGD2VLY.js";import"./TextField-Cx5OsYq1.js";import"./Form-BqKRbvb9.js";import"./useLabel-BMvlVo7d.js";import"./Label-RcZ5RumP.js";import"./useTextField-BB3dLsw5.js";import"./useFormReset-cUnmQGQz.js";import"./useControlledState-C-X9sbbL.js";import"./useFocusable-DyoB_hOm.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-xtdcz2l6.js";import"./FieldDescription-CZTm8SfG.js";import"./Text-CWVnGydc.js";import"./browser-C5BzL4Ah.js";import"./EmulatedBoldText-Clo2YvSu.js";import"./Tooltip-Blp6pEgY.js";import"./OverlayArrow-HNgDPPr3.js";import"./ProgressBar-ByaJujBA.js";import"./context-DtNWionw.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DjQQHvIW.js";import"./ReactAriaControlledValueFix-BxcjtgAG.js";import"./ContextualHelpTrigger-DealJoYd.js";import"./Popover-BGe9X61A.js";import"./DialogTriggerView-Db6UDAae.js";import"./context-DJTNNuyW.js";import"./useStatic-WTXFIrX_.js";import"./Dialog-BHWnDcSc.js";import"./Button-BNdmwyxy.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-wu8eZQGI.js";import"./RSPContexts-acmSHJ3A.js";import"./Collection-Dyt6IE1A.js";import"./CollectionBuilder-D0yiIIyP.js";import"./Separator-AkxPmIRq.js";import"./SearchField-Doktui3O.js";import"./useEvent-DVcRtgtL.js";import"./SelectionManager-JcMzUkMf.js";import"./useCollator-Zc_ZemNk.js";import"./FocusScope-BOmeY0Fa.js";import"./VisuallyHidden-DDMzvk-a.js";import"./Heading-CpWZd5Gf.js";import"./Heading-DoScZ8Wx.js";import"./getActionGroupSlot-SZaPZq2Z.js";import"./LoadingSpinner-8cDNCbSg.js";import"./react-children-utilities-CAbCr3MC.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,v;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var R,L,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
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
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,le as __namedExportsOrder,pe as default};
