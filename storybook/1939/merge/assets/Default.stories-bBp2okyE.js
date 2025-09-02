import{r as M,j as r}from"./iframe-BmZalVao.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Ok3U2Ri1.js";import{L as P}from"./Label-Cd70f9RY.js";import{u as N,F as z,a as U}from"./Form-DL0Mu2pj.js";import{s as Y}from"./Action-Bg05qC2u.js";import{B as h}from"./Button-V4gWXU1O.js";import{m as Z}from"./IconWarning-Uta2YDJP.js";import{C as G}from"./CopyButton-Bu8sD-37.js";import"./PropsContextProvider-OSTZh0lU.js";import"./mergeRefs-CtwPOjS1.js";import"./index-srGqJPqU.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Bd-ukmcE.js";import"./utils-CAvZ88A2.js";import"./Text-fNTtgWDx.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DxIJd-p3.js";import"./Hidden-CVk6dJGe.js";import"./useFocusRing-DYr6CdEu.js";import"./useFocus-CJp-zb5k.js";import"./TextField-BS0IdMWE.js";import"./Form-B9rSyzAs.js";import"./useLabel-Dcdc4QL3.js";import"./Label-BMWYWyxm.js";import"./useTextField-CryG3TpM.js";import"./useFormReset-BvOmhq3S.js";import"./useControlledState-DkevdXcu.js";import"./useFocusable-RaDIdBmD.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-bqAUw6AE.js";import"./FieldDescription-C1acGmui.js";import"./Text-1n2lmTX2.js";import"./browser-DJMeickF.js";import"./EmulatedBoldText-BKXMjbmY.js";import"./Tooltip-Eha7-hE0.js";import"./OverlayArrow-W1WVUYgG.js";import"./ProgressBar-B81Zb8lf.js";import"./context-CHBdcuz4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D1wGXel8.js";import"./ReactAriaControlledValueFix-C0NOXItS.js";import"./ContextualHelpTrigger-C-CCkmxh.js";import"./Popover-OJamc9qf.js";import"./DialogTriggerView-DWEqOoqf.js";import"./context-Dnd0SHjI.js";import"./useStatic-CmyP-4Qc.js";import"./Dialog-Ck302eWi.js";import"./Button-B7Mfw9fE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ceZxyZeS.js";import"./RSPContexts-CXUSdcNb.js";import"./Collection-CssVnDWl.js";import"./CollectionBuilder-1RXdNJ75.js";import"./Separator-CxpVYPZi.js";import"./SearchField-DC-QuQzo.js";import"./useEvent-C050BYP-.js";import"./SelectionManager-B-lKeVzN.js";import"./useCollator-B5Q-zmAD.js";import"./FocusScope-H3r5uJpM.js";import"./VisuallyHidden-CzhjBb86.js";import"./Heading-BghQHuYX.js";import"./Heading-VIMxqSuK.js";import"./getActionGroupSlot-Bu_U71dX.js";import"./LoadingSpinner-D3X9xJLw.js";import"./react-children-utilities-3SyntVc5.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
