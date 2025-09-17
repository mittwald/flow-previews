import{r as M,j as r}from"./iframe-BmaCy5vn.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DWePoGcM.js";import{L as P}from"./Label-C9e3OZeO.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BrDOpJsw.js";import{s as Y}from"./Action-DY7JPpLy.js";import{B as h}from"./Button-D_WPZvgQ.js";import{m as Z}from"./IconWarning-HxJndVZz.js";import{C as G}from"./CopyButton-DPboJw73.js";import"./PropsContextProvider-Cdtu9ZvQ.js";import"./mergeRefs-B-jDhE92.js";import"./index-DPf4rLTQ.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DrLNSIg1.js";import"./utils-BTcDldbE.js";import"./Text-DKW9AlZS.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BQQ9lk60.js";import"./Hidden-DFOfTeRc.js";import"./useFocusRing-BIF3mfAv.js";import"./useFocus-eJJI3D_B.js";import"./TextField-BuSg5oYg.js";import"./Form-JYTBzchK.js";import"./useLabel-aIW9IeHZ.js";import"./Label-v3v2JpRx.js";import"./useTextField-DWi3otFd.js";import"./useFormReset-BOYVXvui.js";import"./useControlledState-D7fTNmKi.js";import"./useFocusable-BZM-anb5.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-6Obb3s6p.js";import"./FieldDescription-D4Sebi0C.js";import"./Text-Bb5YosKE.js";import"./browser-CHe_8eCl.js";import"./EmulatedBoldText-6eMdCTCE.js";import"./Tooltip-DLSh-NOo.js";import"./OverlayArrow-DPRWr8HF.js";import"./ProgressBar-DbkKYMEg.js";import"./context-D74MXKTM.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Bee7TgYK.js";import"./ReactAriaControlledValueFix-CiaR6bC2.js";import"./ContextualHelpTrigger-DS0x0K1X.js";import"./Popover-DJ-DOiR3.js";import"./DialogTriggerView-Cgh3ruvs.js";import"./context-unxNYjwy.js";import"./useStatic-CZNYuNH3.js";import"./Dialog-DNzI_GfM.js";import"./Button-wePQNGHF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D_L0SfOg.js";import"./RSPContexts-BWdUGPyC.js";import"./Collection-De-LJyRM.js";import"./CollectionBuilder-DYux32p_.js";import"./Separator-C4UM9Z4C.js";import"./SearchField-CGzmXx6T.js";import"./useEvent-BVPjBT0Y.js";import"./SelectionManager-YuLIOZci.js";import"./useCollator-BSPhXtyK.js";import"./FocusScope-BP1WICTq.js";import"./VisuallyHidden-CbssR0xZ.js";import"./Heading-DvU7HY66.js";import"./Heading---3yDhu1.js";import"./useManagedValue-DbK5u54K.js";import"./getActionGroupSlot-BjpD5yQ9.js";import"./LoadingSpinner-ht0ZG28N.js";import"./react-children-utilities-gyM1dxU1.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ce={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,de as __namedExportsOrder,ce as default};
