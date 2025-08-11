import{r as M,j as r}from"./iframe-CRCn_1k8.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-BFvF_0LQ.js";import{L as h}from"./Label-CTLOVe14.js";import{u as N,F as z,a as U}from"./Form-COoLg9rS.js";import{s as Y}from"./Action-DUoIh7jH.js";import{B as u}from"./Button-BVbQUaZI.js";import{m as Z}from"./IconWarning-DfyJ3u1O.js";import{C as G}from"./CopyButton-BHXFy0mD.js";import"./PropsContextProvider-BubU3Kz3.js";import"./mergeRefs-Gw2OcT6Q.js";import"./index-7hVsDhMa.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Get8RxYf.js";import"./utils-BI2kd8b-.js";import"./Text-CnPg80ig.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D1x-PT5o.js";import"./Hidden-860WeEVo.js";import"./useFocusRing-CAd7IlbP.js";import"./useFocus-B3vm1A24.js";import"./TextField-BUKK7PKt.js";import"./Form-BUDb6yDR.js";import"./useLabel-76mwt2Hf.js";import"./Label-DuoAXWP0.js";import"./useTextField-BRTDaWoE.js";import"./useFormReset-DT5J9yBd.js";import"./useControlledState-gjMGbt2_.js";import"./useFocusable-BJ6918Tp.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BF0ybVTQ.js";import"./FieldDescription-BOXS3uwV.js";import"./Text-DcU8-VYF.js";import"./browser-B1ctrq8_.js";import"./EmulatedBoldText-YLFM-K80.js";import"./Tooltip-BrrJ9Ar-.js";import"./OverlayArrow-CtMzTmFy.js";import"./ProgressBar-CqTE0rEm.js";import"./context-fzWZoyLv.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DT9CXOan.js";import"./ReactAriaControlledValueFix-4cqg22X8.js";import"./ContextualHelpTrigger-CPcWvUsm.js";import"./Popover-DPuqnpVW.js";import"./DialogTriggerView-D7FvFq3-.js";import"./context-BrbDjT5a.js";import"./useStatic-coyUivo9.js";import"./Dialog-1-lFH5mz.js";import"./Button-DC_FOGfE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CPRYRx8p.js";import"./RSPContexts-C8n8IA5U.js";import"./Collection-BXQIElN8.js";import"./CollectionBuilder-DKleWLkr.js";import"./Separator-C4pDfZY6.js";import"./SearchField-sAGmdzL3.js";import"./useEvent-BjeIZ3GR.js";import"./SelectionManager-gdTsuSpq.js";import"./useCollator-CSlC2lAk.js";import"./FocusScope-B7tfNpBC.js";import"./VisuallyHidden-4OPl2Xdl.js";import"./Heading-EsjzmIKn.js";import"./Heading-CTGaAvvp.js";import"./getActionGroupSlot-QXW-CFJF.js";import"./LoadingSpinner-DMa7-rPQ.js";import"./react-children-utilities-BvqZzXsF.js";import"./onlyText-BB14IW5w.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
