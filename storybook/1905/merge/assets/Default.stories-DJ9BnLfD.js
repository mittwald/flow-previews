import{r as M,j as r}from"./iframe-BBU8Vi5z.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Ci2-wmw0.js";import{L as P}from"./Label-C0WPThdc.js";import{u as N,F as z,a as U}from"./Form-CEuevqEv.js";import{s as Y}from"./Action-DsHIOktH.js";import{B as h}from"./Button-NW1Of_qV.js";import{m as Z}from"./IconWarning-Dzfnqwsx.js";import{C as G}from"./CopyButton-ifr7wm2w.js";import"./PropsContextProvider-Dh-an_RK.js";import"./mergeRefs-0pGj6C_j.js";import"./index-NZtYUN4c.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DZ37g0Dt.js";import"./utils-Bl0beZ_h.js";import"./Text-DKRByA_e.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-SY2qABfH.js";import"./Hidden-BzeT6TXj.js";import"./useFocusRing-CcJdq_JE.js";import"./useFocus-BO2H44GU.js";import"./TextField-ByGAuS2u.js";import"./Form-CKpkDEiG.js";import"./useLabel-Dhqi6uDE.js";import"./Label-DtosUGK-.js";import"./useTextField-7Er_r7Sk.js";import"./useFormReset-CcPabkKc.js";import"./useControlledState-JBkrIXcy.js";import"./useFocusable-CH53ZRkg.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Bm5U6po7.js";import"./FieldDescription-BWVpZiVv.js";import"./Text-Dmx06jI1.js";import"./browser-ZEfsbAUe.js";import"./EmulatedBoldText-CqafDXFr.js";import"./Tooltip-C-z481W3.js";import"./OverlayArrow-CTw_TzGf.js";import"./ProgressBar-BVefmcd6.js";import"./context-LLBgjHpi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Dev9EnbH.js";import"./ReactAriaControlledValueFix-k2qPwuWk.js";import"./ContextualHelpTrigger-C1SnE4DN.js";import"./Popover-DwT_NCjp.js";import"./DialogTriggerView-BnWyhZ1v.js";import"./context-6Ujzj1TE.js";import"./useStatic-D_gn09gr.js";import"./Dialog-CLHxRTEc.js";import"./Button-KQBofztE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-VQWCXiAV.js";import"./RSPContexts-CuT-5ERO.js";import"./Collection-CAYUknat.js";import"./CollectionBuilder-Ck3uMDqM.js";import"./Separator-SD0n1yxH.js";import"./SearchField-CLTvmi2R.js";import"./useEvent-COUneAHH.js";import"./SelectionManager-C_TBHMOd.js";import"./useCollator-kculxw9I.js";import"./FocusScope-DSRDaxy2.js";import"./VisuallyHidden-DSdNvIxr.js";import"./Heading-CGPbMKMb.js";import"./Heading-BEs3i8tz.js";import"./getActionGroupSlot-fjA7p-Zb.js";import"./LoadingSpinner-Y9e7IKXn.js";import"./react-children-utilities-Cx9e5KRs.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
