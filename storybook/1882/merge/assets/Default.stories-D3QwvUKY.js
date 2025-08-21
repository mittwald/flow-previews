import{r as M,j as r}from"./iframe-Djw2qN4N.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-C25VRx4j.js";import{L as P}from"./Label-DW829cz7.js";import{u as N,F as z,a as U}from"./Form-hrWuMNL-.js";import{s as Y}from"./Action-U7vDxNUW.js";import{B as h}from"./Button-DbUzlGPh.js";import{m as Z}from"./IconWarning-CGeyKArL.js";import{C as G}from"./CopyButton-DIAbxBAn.js";import"./PropsContextProvider-CTcixsmb.js";import"./mergeRefs-wyRtFOcD.js";import"./index-BTrHPcFI.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CaVGVfZY.js";import"./utils-DHksHmrI.js";import"./Text-wW5QNV-A.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CPAHFVqL.js";import"./Hidden-CQXH1kLj.js";import"./useFocusRing-zh24oNHk.js";import"./useFocus-qvLuoihW.js";import"./TextField-CI5mY1Ro.js";import"./Form-fQWPP7Lo.js";import"./useLabel-Cdum_nIm.js";import"./Label-BqIGEZIR.js";import"./useTextField-YfVJ_Q8A.js";import"./useFormReset-Ciz8aHP_.js";import"./useControlledState-3RrKoOGV.js";import"./useFocusable-C2MDV8K7.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Dy-AF12R.js";import"./FieldDescription-B7A8YDcc.js";import"./Text-N2Xlqf-I.js";import"./browser-CF3hFWtX.js";import"./EmulatedBoldText-CB7N4Qe6.js";import"./Tooltip-C1zH3A51.js";import"./OverlayArrow-BC79QONy.js";import"./ProgressBar-jq0-4j1i.js";import"./context-SMG2uflK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-A4R3Jnzo.js";import"./ReactAriaControlledValueFix-bJtcDsVa.js";import"./ContextualHelpTrigger-DvOe9sdC.js";import"./Popover-BxXe92TW.js";import"./DialogTriggerView-Cii_d7-u.js";import"./context-D5-d9F9A.js";import"./useStatic-DLgn7tpr.js";import"./Dialog-S7NRO65S.js";import"./Button-Cmn8DEd4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DmhdXdf4.js";import"./RSPContexts-BWg1RNKY.js";import"./Collection-BBr6vmvw.js";import"./CollectionBuilder-nkz2VjEe.js";import"./Separator-_-XVNxdO.js";import"./SearchField-3KlsKxhn.js";import"./useEvent-Dc_urDPd.js";import"./SelectionManager-VfQb8aC7.js";import"./useCollator-IeylOfPf.js";import"./FocusScope-xrFWyxY9.js";import"./VisuallyHidden-DfkyRh3Z.js";import"./Heading-CEZ2AJaG.js";import"./Heading-B7P3iAP_.js";import"./getActionGroupSlot-jleWxawA.js";import"./LoadingSpinner-DRHSwImm.js";import"./react-children-utilities-XBwC9SQJ.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
