import{r as M,j as r}from"./iframe-DVH1JXtP.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BVFpIqN2.js";import{L as P}from"./Label-CxrJqwXs.js";import{u as N,F as z,a as U}from"./Form-BpB0g6Oe.js";import{s as Y}from"./Action-Dfm0OsG2.js";import{B as h}from"./Button-DSdtNwsI.js";import{m as Z}from"./IconWarning-CU_Jn-Rh.js";import{C as G}from"./CopyButton-h3TvP1qr.js";import"./PropsContextProvider-FHPOrKi5.js";import"./mergeRefs-C62y_F-P.js";import"./index-CtJAiOn7.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DwXG4Veb.js";import"./utils-BK8baG-i.js";import"./Text-CBJ04nMy.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DXbOZXZb.js";import"./Hidden-weVCu2TA.js";import"./useFocusRing-DRg_t-7O.js";import"./useFocus-CQVh66mU.js";import"./TextField-DIPy1Cq_.js";import"./Form-BPwJmxNt.js";import"./useLabel-NP7-116U.js";import"./Label-CMyz7O-I.js";import"./useTextField-qeWtBHoH.js";import"./useFormReset-rRCeDrNW.js";import"./useControlledState-Urxw2XXp.js";import"./useFocusable-T2p-jFMn.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-4LhCBGmq.js";import"./FieldDescription-Dh2sYvVC.js";import"./Text-D1P9H2_H.js";import"./browser-C28Fm9d0.js";import"./EmulatedBoldText-Bdvunp4L.js";import"./Tooltip-DKusMOpZ.js";import"./OverlayArrow-ChkDdsgW.js";import"./ProgressBar-BUKyhVQw.js";import"./context-CdYfmHmn.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DaQD7sH9.js";import"./ReactAriaControlledValueFix-DWpTaiEI.js";import"./ContextualHelpTrigger-xUyTSFcc.js";import"./Popover-BgKKCKbh.js";import"./DialogTriggerView-BkHHTKiO.js";import"./context-agOgnAGz.js";import"./useStatic-DdpPKhEz.js";import"./Dialog-CmRE6s2J.js";import"./Button-DzMSo0AA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BeW5A3Oi.js";import"./RSPContexts-B3CI5xG8.js";import"./Collection-D1ordEmx.js";import"./CollectionBuilder-ChFPkv_k.js";import"./Separator-QeHbXW8z.js";import"./SearchField-BBggbv2v.js";import"./useEvent-D6G3dElA.js";import"./SelectionManager-olLeBgyH.js";import"./useCollator-DOzXEcud.js";import"./FocusScope-BiiCP1_E.js";import"./VisuallyHidden-DtF4wZC2.js";import"./Heading-DPRmeFmU.js";import"./Heading-D1ZVwUdr.js";import"./getActionGroupSlot-B8kYKXqG.js";import"./LoadingSpinner-BkBLmddP.js";import"./react-children-utilities-TKD2i8JI.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
