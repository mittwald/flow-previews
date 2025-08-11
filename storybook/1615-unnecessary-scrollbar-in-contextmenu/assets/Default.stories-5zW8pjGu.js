import{r as M,j as r}from"./iframe-CR8Ddg53.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-B9YcBmvQ.js";import{L as h}from"./Label-ZXYVd8nk.js";import{u as N,F as z,a as U}from"./Form-CkhxsqKJ.js";import{s as Y}from"./Action-DHaG0aqo.js";import{B as u}from"./Button-Dau4z8hc.js";import{m as Z}from"./IconWarning-B_4O4CPt.js";import{C as G}from"./CopyButton-B5Vwl7KG.js";import"./PropsContextProvider-BqN4v3Py.js";import"./mergeRefs-mV7XR32G.js";import"./index-Kj0ypInV.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-D80gKGFP.js";import"./utils-CPU25MAw.js";import"./Text-cGYhBKhC.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DuGIesTy.js";import"./Hidden-CcFqVLpr.js";import"./useFocusRing-RTREyv-v.js";import"./useFocus-B62aW2Cd.js";import"./TextField-ipRwSBAP.js";import"./Form-knrQXPF2.js";import"./useLabel-Cs4Ke5Sw.js";import"./Label-BGtqz6Va.js";import"./useTextField-BXQ9ns67.js";import"./useFormReset-CWiQQPlL.js";import"./useControlledState-C1vKNjS4.js";import"./useFocusable-alsSoJVf.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-e25kDgdq.js";import"./FieldDescription-5bt3DrYj.js";import"./Text-BErvAADj.js";import"./browser-mRWe3g-L.js";import"./EmulatedBoldText-DQgoED4q.js";import"./Tooltip-DtIT0TNt.js";import"./OverlayArrow-CgdJalR5.js";import"./ProgressBar-BTwhL8hz.js";import"./context-CK3Xzdoe.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CsImQUVf.js";import"./ReactAriaControlledValueFix-CeDCM1e6.js";import"./ContextualHelpTrigger-CkHuCD2D.js";import"./Popover-HdRbciH-.js";import"./DialogTriggerView-DftwNWn5.js";import"./context-BXRR_TNN.js";import"./useStatic-PrBBNnv4.js";import"./Dialog-H-c5ZIEM.js";import"./Button-DYYTgRSY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-_KFTzH0P.js";import"./RSPContexts-CzStg2xL.js";import"./Collection-BsJXi1eq.js";import"./CollectionBuilder-BOVbIZYX.js";import"./Separator-DA11LE-f.js";import"./SearchField-yrOr7IhK.js";import"./useEvent-rwuiNVtk.js";import"./SelectionManager-BaZzBhEG.js";import"./useCollator-DPpvLnMn.js";import"./FocusScope-BbJ4WC9_.js";import"./VisuallyHidden-D_HRp7SG.js";import"./Heading-DbI53R5H.js";import"./Heading-UMlMpnou.js";import"./getActionGroupSlot-DHUqTI33.js";import"./LoadingSpinner-CQuEQatc.js";import"./react-children-utilities-BkAQnv4m.js";import"./onlyText-BRAo5kl2.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
