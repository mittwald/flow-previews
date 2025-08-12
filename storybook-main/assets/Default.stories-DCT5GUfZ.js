import{r as M,j as r}from"./iframe-CSKx2DB9.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-CVVDBZid.js";import{L as h}from"./Label-uvRQ_UBY.js";import{u as N,F as z,a as U}from"./Form-CGOJU0ig.js";import{s as Y}from"./Action-ClIpfTCh.js";import{B as u}from"./Button-CGfBcGjf.js";import{m as Z}from"./IconWarning-BzSjyCQK.js";import{C as G}from"./CopyButton-DpLRFOdI.js";import"./PropsContextProvider-C0bkGgAw.js";import"./mergeRefs-B1bHS3Lu.js";import"./index-CZyLPT9E.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BRs7GrZl.js";import"./utils-YOZNNe11.js";import"./Text-B7qxA7QU.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CcV8UsXg.js";import"./Hidden-DMi08SHV.js";import"./useFocusRing-BU-rqxqA.js";import"./useFocus-I-Zr9gNg.js";import"./TextField-BnFF1ZSM.js";import"./Form-BMsmelnL.js";import"./useLabel-_rV78s5e.js";import"./Label-DAbN940v.js";import"./useTextField-Z7fbw5-A.js";import"./useFormReset-BnPXW2IT.js";import"./useControlledState-C62hAHev.js";import"./useFocusable-Bvlvgb30.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CbU9JYnr.js";import"./FieldDescription-DKZCLIUS.js";import"./Text-Bmwkohav.js";import"./browser-Dat2Zw9G.js";import"./EmulatedBoldText-BvpVJXGr.js";import"./Tooltip-DBO7GB_m.js";import"./OverlayArrow-Do1uAdCK.js";import"./ProgressBar-YhbO88q7.js";import"./context-Bn01uWj8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CVB2HXqz.js";import"./ReactAriaControlledValueFix-D8ps3qCw.js";import"./ContextualHelpTrigger-0-roWp6k.js";import"./Popover-DLfT28i_.js";import"./DialogTriggerView-B5qjcGt-.js";import"./context-DR_D1zB2.js";import"./useStatic-Bj6FvUH8.js";import"./Dialog-DyxFQfdj.js";import"./Button-B9MrnXzC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ecHooUdc.js";import"./RSPContexts-wGW2yDhA.js";import"./Collection-xryT71jZ.js";import"./CollectionBuilder-DUDLoyvE.js";import"./Separator-9BmxbDD1.js";import"./SearchField-CCkKmI81.js";import"./useEvent-BD3Jcka0.js";import"./SelectionManager-C0eeXnR3.js";import"./useCollator-D-NDo9Pp.js";import"./FocusScope-CQRCLCh1.js";import"./VisuallyHidden-BzxCqTVo.js";import"./Heading-DOJjlFqr.js";import"./Heading-CZ9N6yHw.js";import"./getActionGroupSlot-v4y_SS20.js";import"./LoadingSpinner-BollpMOD.js";import"./react-children-utilities-DQ7lu5V4.js";import"./onlyText-C89_4VCq.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
