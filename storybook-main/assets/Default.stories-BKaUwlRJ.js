import{r as M,j as r}from"./iframe-BwuZESNl.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-BxntSy9e.js";import{L as h}from"./Label-Bp0IrURb.js";import{u as N,F as z,a as U}from"./Form-CTspdJcC.js";import{s as Y}from"./Action-Bt7uXbM9.js";import{B as u}from"./Button-C-_knNCH.js";import{m as Z}from"./IconWarning-WAZUP-Ct.js";import{C as G}from"./CopyButton-LN3pbug0.js";import"./PropsContextProvider-BusDQUVZ.js";import"./mergeRefs-Dzw8-qaC.js";import"./index-BsghocK6.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DYnYqKIj.js";import"./utils-DwFj3dGQ.js";import"./Text-BwbgPKEG.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DZ7V6HJS.js";import"./Hidden-B4snL9ZX.js";import"./useFocusRing-CS-U_0il.js";import"./useFocus-Co7EWAzt.js";import"./TextField-CAE6yhWA.js";import"./Form-DMd5Q7rx.js";import"./useLabel-Cozlv_-X.js";import"./Label-Dt17YKxE.js";import"./useTextField-DPMhYcJW.js";import"./useFormReset-BKxc7BR_.js";import"./useControlledState-DDCrWfj9.js";import"./useFocusable-CJY6BQME.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-5tmL22mm.js";import"./FieldDescription-CTyhbSa2.js";import"./Text-DpTMi7Hm.js";import"./browser-BKpgmdP8.js";import"./EmulatedBoldText-CFTp_0vf.js";import"./Tooltip-BFM8pIbs.js";import"./OverlayArrow-Ct_bakog.js";import"./ProgressBar-DWIeEB0n.js";import"./context-Bl9z0-Ez.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CzmxkLVc.js";import"./ReactAriaControlledValueFix-CB93VJuz.js";import"./ContextualHelpTrigger-D8WlZ847.js";import"./Popover-CDL__2cK.js";import"./DialogTriggerView-CDdW0IZG.js";import"./context-X7aiLuFr.js";import"./useStatic-B6vMCsEx.js";import"./Dialog-C5G24GfN.js";import"./Button-DTlvpG2l.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLzpZvIT.js";import"./RSPContexts-B82SnKIX.js";import"./Collection-BUR6CQUz.js";import"./CollectionBuilder-MbnL1jCD.js";import"./Separator-x7E6VMeq.js";import"./SearchField-Cldn6FRa.js";import"./useEvent-D4npkP0f.js";import"./SelectionManager-BpegylfK.js";import"./useCollator-D-5CGuzZ.js";import"./FocusScope-CjFTNvkQ.js";import"./VisuallyHidden-H0mCENoD.js";import"./Heading-DHkvDNzw.js";import"./Heading-BH8n_JJv.js";import"./getActionGroupSlot-D2B53nCF.js";import"./LoadingSpinner-Cad6y9w3.js";import"./react-children-utilities-BrQNaChO.js";import"./onlyText-BkXRntLw.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,v,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var T,W,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
