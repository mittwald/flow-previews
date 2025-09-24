import{r as M,j as r}from"./iframe-ct20Zc4_.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-7vDBYX7J.js";import{L as P}from"./Label-Dr2f8Urt.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-Bx4qtmFG.js";import{s as Y}from"./Action-BP61FP92.js";import{B as h}from"./Button-D_7HTG7B.js";import{q as Z}from"./IconWarning-CcsQkvTO.js";import{C as G}from"./CopyButton-DSVbdDNB.js";import"./dynamic-tkuqvrvh.js";import"./PropsContextProvider-CgsWNoxz.js";import"./mergeRefs-6DcqMVoC.js";import"./index-DEpD1rGL.js";import"./clsx-B-dksMZM.js";import"./FieldError-kSnIjzvs.js";import"./utils-DpMwq36_.js";import"./Text-BxKbsi5b.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DAb_r1xm.js";import"./Hidden-B9i9z_Z9.js";import"./useFocusRing-D8miGa7N.js";import"./useFocus-BkH8qcCX.js";import"./TextField-BxnrnSEC.js";import"./Form-BSds6g5P.js";import"./useLabel-Cp6IFTTd.js";import"./Label-Acl7hQj6.js";import"./useTextField-B0tvR0aW.js";import"./useFormReset-DrqvUx_9.js";import"./useControlledState-CwKmYwnv.js";import"./useFocusable-CQ8WqruE.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-3QHdAtoW.js";import"./FieldDescription-CdEx8efJ.js";import"./Text-DcjvjsPV.js";import"./browser-Cy4n9sSP.js";import"./EmulatedBoldText-CxSwZZv_.js";import"./Tooltip-DxANvok-.js";import"./ClearPropsContextView-YUez0bQh.js";import"./ProgressBar-CK-tPEaL.js";import"./context-DnCGX3ZW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CzDXjL81.js";import"./ReactAriaControlledValueFix-BECyaTuY.js";import"./ContextualHelpTrigger-_Bo9nUmM.js";import"./Popover-DidQYUqo.js";import"./DialogTriggerView-Dw2hBdec.js";import"./context-BYoyCjQY.js";import"./useStatic-x6Peb5cY.js";import"./Button-DDK8DVRp.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C5fNoyVy.js";import"./RSPContexts-C51MpexI.js";import"./FocusScope-B8eJTcfl.js";import"./useCollator-CiYYIB6D.js";import"./VisuallyHidden-TqoC2igt.js";import"./Collection-IIiQ3cHk.js";import"./CollectionBuilder-hbCRLoQk.js";import"./Separator-C0MPI4X4.js";import"./SearchField-nImGJb9R.js";import"./useEvent-u8lVOPY0.js";import"./SelectionManager-C0f7nk4D.js";import"./Heading-CZ_DW7ZR.js";import"./Heading-CTWkE0iq.js";import"./useManagedValue-uiG49Ox7.js";import"./getActionGroupSlot-DgDgHkEO.js";import"./LoadingSpinner-UirJOZi_.js";import"./react-children-utilities-BseQC5s3.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
