import{r as M,j as r}from"./iframe-BXDMX86q.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-C9TL3c4b.js";import{L as P}from"./Label-CEOTZRHh.js";import{u as N,F as z,a as U}from"./Form-D6mG4--u.js";import{s as Y}from"./Action-BFcs-WUV.js";import{B as h}from"./Button-BmoIjDQV.js";import{m as Z}from"./IconWarning-CtdkcZph.js";import{C as G}from"./CopyButton-uuR34Hla.js";import"./PropsContextProvider-CA-rRUQt.js";import"./mergeRefs-BlQ7xsLt.js";import"./index-CXUv09w1.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-B3Nc_fB3.js";import"./utils-BbnHDINk.js";import"./Text-8unsz-5q.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-UZonwJ93.js";import"./Hidden-9xlFaPY3.js";import"./useFocusRing-dYveCnJn.js";import"./useFocus-EmCEI_3W.js";import"./TextField-ByaluKOI.js";import"./Form-BaF7AzDl.js";import"./useLabel-B1CTPn-c.js";import"./Label-KbRAOmA4.js";import"./useTextField-DRlSiNws.js";import"./useFormReset-CB9QX2BV.js";import"./useControlledState-8m1Jp16z.js";import"./useFocusable-x1ctHjf6.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-qg7uGN0h.js";import"./FieldDescription-DoqYRnl8.js";import"./Text-bj3uPEQb.js";import"./browser-1ziQicFl.js";import"./EmulatedBoldText-hpKq7Hz7.js";import"./Tooltip-tnBBmzJS.js";import"./OverlayArrow-CxKD8bHN.js";import"./ProgressBar-CqOUw3BL.js";import"./context-DyduO5X5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Cu-ju4he.js";import"./ReactAriaControlledValueFix-DG6XYhgW.js";import"./ContextualHelpTrigger-Be7q1zCU.js";import"./Popover-Can9HETa.js";import"./DialogTriggerView-CDb3rmL9.js";import"./context-CKEF2sYl.js";import"./useStatic-B3xzZHSp.js";import"./Dialog-B1-wK1GW.js";import"./Button-CTCpguPA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DrTnWIPr.js";import"./RSPContexts-BVwGfu3g.js";import"./Collection-DRL76Dr2.js";import"./CollectionBuilder-tPYtcWuA.js";import"./Separator-dxgt4vJy.js";import"./SearchField-MnOXAoEn.js";import"./useEvent-DDpQr-S3.js";import"./SelectionManager-DxlIos2Z.js";import"./useCollator-4XxMIsgb.js";import"./FocusScope-CI4D8ZGu.js";import"./VisuallyHidden-_kOtwmic.js";import"./Heading-C4NbOxP2.js";import"./Heading-BOaJ6qO-.js";import"./getActionGroupSlot-C0k2Pat9.js";import"./LoadingSpinner-B8vc0P23.js";import"./react-children-utilities-xiFHRLHa.js";import"./onlyText-o6JM30Kt.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
