import{r as M,j as r}from"./iframe-DTi9QmA0.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BKQVL5rI.js";import{L as P}from"./Label-CQetSSMr.js";import{u as N,F as z,a as U}from"./Form-CxbZBpI7.js";import{s as Y}from"./Action-xnhUT-gM.js";import{B as h}from"./Button-DSq_4Ojq.js";import{m as Z}from"./IconWarning-DxYwd6KK.js";import{C as G}from"./CopyButton-ChSSnNB7.js";import"./PropsContextProvider-hsBezmuJ.js";import"./mergeRefs-CRQizX0M.js";import"./index-AIe693y_.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-B9D2P1L5.js";import"./utils-CL7caOLd.js";import"./Text-uHJoYlsI.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C0wS_Dx9.js";import"./Hidden-vKywT2Di.js";import"./useFocusRing-DtGgtmUN.js";import"./useFocus-ZZE_0lQ_.js";import"./TextField-1nP9PUNp.js";import"./Form-MgZU7Vwa.js";import"./useLabel-BsOHSad-.js";import"./Label-CZheX-BS.js";import"./useTextField-DlNFPg1I.js";import"./useFormReset-BLacz0U5.js";import"./useControlledState-plF7sQ7U.js";import"./useFocusable-C9TzKwDz.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-GbuBlm-B.js";import"./FieldDescription-RVA1j_lW.js";import"./Text-rZE64TpZ.js";import"./browser-C8n4ubUN.js";import"./EmulatedBoldText-CvSsCxBp.js";import"./Tooltip-Bz63vo8l.js";import"./OverlayArrow-CdR0wOB6.js";import"./ProgressBar-CZcDm412.js";import"./context-CCdZhs-h.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DlTJgtIJ.js";import"./ReactAriaControlledValueFix-COFKvOa9.js";import"./ContextualHelpTrigger-CAg_Z7hC.js";import"./Popover-CRgc4F5w.js";import"./DialogTriggerView-C9W1PVXA.js";import"./context-O1stu3iI.js";import"./useStatic-CrO0OLrU.js";import"./Dialog-D6TGzY5R.js";import"./Button-DEHF5lJo.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DGBc0zwK.js";import"./RSPContexts-AUq49PY7.js";import"./Collection-ChROeXcJ.js";import"./CollectionBuilder-DdDVVtah.js";import"./Separator-rsJpBnK2.js";import"./SearchField-baoCU1ZF.js";import"./useEvent-CA_eanes.js";import"./SelectionManager-B8EhsD0x.js";import"./useCollator-9sk9Xc09.js";import"./FocusScope-Dyo2gp6z.js";import"./VisuallyHidden-vt7X_vEY.js";import"./Heading-DQ34o-na.js";import"./Heading-BuLKGKUk.js";import"./getActionGroupSlot-ViofuXey.js";import"./LoadingSpinner-CxmP28Uh.js";import"./react-children-utilities-DaBs8Xc8.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
