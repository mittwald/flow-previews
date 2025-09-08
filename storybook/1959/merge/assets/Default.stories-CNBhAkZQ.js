import{r as M,j as r}from"./iframe-9NvHEEYX.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Rwc5N_Um.js";import{L as P}from"./Label-Bp2WajZU.js";import{u as N,F as z,a as U}from"./Form-CEzK2E1I.js";import{s as Y}from"./Action-DrNj8V5h.js";import{B as h}from"./Button-DNkWV-Zy.js";import{m as Z}from"./IconWarning-BrSB4tEd.js";import{C as G}from"./CopyButton-o2zrc_Kq.js";import"./PropsContextProvider-CqBUeMMu.js";import"./mergeRefs-C771JiYT.js";import"./index-CxV9xeMB.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-osHXMSr-.js";import"./utils-phTOhdhB.js";import"./Text-BvWwS3Z5.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-HJeSUD3y.js";import"./Hidden-yLzo_Xn1.js";import"./useFocusRing-B-QDi9By.js";import"./useFocus-D6PAQN6n.js";import"./TextField-CFZkN_yv.js";import"./Form-Bv_h1ugL.js";import"./useLabel-BM-ocsZo.js";import"./Label-BnOBL7z7.js";import"./useTextField-DLSWgg2h.js";import"./useFormReset-CqIGJUAV.js";import"./useControlledState-QTuKyMuz.js";import"./useFocusable-B9Hhp3CR.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B6ipGGiX.js";import"./FieldDescription-BaEgR1T7.js";import"./Text-DmCU-xjB.js";import"./browser-bwKj2ElG.js";import"./EmulatedBoldText-D0lgjAwv.js";import"./Tooltip-nmpX_R6C.js";import"./OverlayArrow-Csc6TqF8.js";import"./ProgressBar-OiyktaR6.js";import"./context-1WNE-E4a.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DS1f0b9q.js";import"./ReactAriaControlledValueFix-CYYlRawh.js";import"./ContextualHelpTrigger-Bdis-ne8.js";import"./Popover-C5ED0s7q.js";import"./DialogTriggerView-ZMPabgU7.js";import"./context-BhkBgBm1.js";import"./useStatic-CR_xkm7d.js";import"./Dialog-CIsBrKRV.js";import"./Button-BcHYciFT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B41vbTz8.js";import"./RSPContexts-C2QF7PgZ.js";import"./Collection-CLjZHuNo.js";import"./CollectionBuilder-BHg4Vaik.js";import"./Separator-CzXxLIRa.js";import"./SearchField-BZ4AdFAe.js";import"./useEvent-DCcWwaFm.js";import"./SelectionManager-Q48diFGT.js";import"./useCollator-BvoG3B46.js";import"./FocusScope-pZ9Wg3C8.js";import"./VisuallyHidden-BMUrvrGU.js";import"./Heading-D_Pt2E9r.js";import"./Heading-M61hX7dC.js";import"./getActionGroupSlot-v3xFcxcI.js";import"./LoadingSpinner-8k09TVCC.js";import"./react-children-utilities-DYPEZzyn.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
