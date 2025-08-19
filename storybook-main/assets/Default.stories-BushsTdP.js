import{r as M,j as r}from"./iframe-_AHHYLe8.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Ddi78OzS.js";import{L as P}from"./Label-CmGN6q6h.js";import{u as N,F as z,a as U}from"./Form-CmCMiWEO.js";import{s as Y}from"./Action-DvAxFpQR.js";import{B as h}from"./Button-DpBb7dXP.js";import{m as Z}from"./IconWarning-CK_fmTss.js";import{C as G}from"./CopyButton-Dq1MBWlA.js";import"./PropsContextProvider-CHGKeBFG.js";import"./mergeRefs-1cSVj6Oa.js";import"./index-Bz79hXTU.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-7uZDpm9k.js";import"./utils-q-IwrKfZ.js";import"./Text-Bojy_plc.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DIV0b_ks.js";import"./Hidden-BCt71K2Z.js";import"./useFocusRing-BzxKD0KU.js";import"./useFocus-Cc4rXbR6.js";import"./TextField-D1FfviRQ.js";import"./Form-1aZb-GsH.js";import"./useLabel-lAnn0GIu.js";import"./Label-tq8rl8zN.js";import"./useTextField-DtgE5gD9.js";import"./useFormReset-BXtaLb8e.js";import"./useControlledState-Ck4hxHjX.js";import"./useFocusable-DpxzpP9y.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DuMkkaZm.js";import"./FieldDescription-D3vrobdh.js";import"./Text-Cmtv_jKA.js";import"./browser-BP_Bp9A3.js";import"./EmulatedBoldText-DqfdeQcp.js";import"./Tooltip-BaPjNJmj.js";import"./OverlayArrow-QRBdoqIe.js";import"./ProgressBar-Djy6cDSn.js";import"./context-CUyryTbq.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Ci9IX6ka.js";import"./ReactAriaControlledValueFix-BATfbmZI.js";import"./ContextualHelpTrigger-BEp94qnE.js";import"./Popover-D4dqet6R.js";import"./DialogTriggerView-v_JnIB7x.js";import"./context-CggRfmhL.js";import"./useStatic-D0qKbiKB.js";import"./Dialog-CHTGTlq0.js";import"./Button-C5j2D-85.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DSHe1cmn.js";import"./RSPContexts-D87DkYMD.js";import"./Collection-CCW92VXm.js";import"./CollectionBuilder-ZwH2Lf2j.js";import"./Separator-Dnk3E0kw.js";import"./SearchField-BDX95NUI.js";import"./useEvent-Chot4vqs.js";import"./SelectionManager-BurdSYdt.js";import"./useCollator-motRCGH3.js";import"./FocusScope-s_Xca6uO.js";import"./VisuallyHidden-WDbGyUVH.js";import"./Heading-X58ltJnb.js";import"./Heading-C2hoDKBp.js";import"./getActionGroupSlot-NbcIocov.js";import"./LoadingSpinner-DRmJrHkB.js";import"./react-children-utilities-Bx9aQLlK.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
