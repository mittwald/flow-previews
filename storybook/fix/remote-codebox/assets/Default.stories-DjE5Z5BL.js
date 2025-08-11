import{r as M,j as r}from"./iframe-D2buA_qM.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-CdZOFkA4.js";import{L as h}from"./Label-BBxZTNKD.js";import{u as N,F as z,a as U}from"./Form-mvVWTRke.js";import{s as Y}from"./Action-DwzQTwOD.js";import{B as u}from"./Button-zVUpRv9Z.js";import{m as Z}from"./IconWarning-IOoTZAJG.js";import{C as G}from"./CopyButton-snHNF83S.js";import"./PropsContextProvider-NPJkLJf3.js";import"./mergeRefs-DQR1xYYS.js";import"./index-DJwKP2NW.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-B8sT_j_d.js";import"./utils-C_LZ7m3D.js";import"./Text-BCY1tMCR.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BFErIHGB.js";import"./Hidden-avqQs3vJ.js";import"./useFocusRing-k1804b6h.js";import"./useFocus-1B3Rl8Uo.js";import"./TextField-BPJkVYT-.js";import"./Form-BNf6kdxI.js";import"./useLabel-CoFh3sW6.js";import"./Label-N33FpYFY.js";import"./useTextField-e2Nm4Aw4.js";import"./useFormReset-Sc5in8RN.js";import"./useControlledState-DPiym9a8.js";import"./useFocusable-B02zeCY6.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DDV9a_7l.js";import"./FieldDescription-J-tPiH_P.js";import"./Text-yAGEZlE0.js";import"./browser-CXT6LfEZ.js";import"./EmulatedBoldText-rwysn7dV.js";import"./Tooltip-BxwJpzqD.js";import"./OverlayArrow-Cjyx3coH.js";import"./ProgressBar-zFnSV5yo.js";import"./context-DqOuYBdO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CCkIfvdA.js";import"./ReactAriaControlledValueFix-CBMkzs62.js";import"./ContextualHelpTrigger-BA_dgYu2.js";import"./Popover-Sy3WhCVG.js";import"./DialogTriggerView-DB_1VJf1.js";import"./context-BfKgyIPw.js";import"./useStatic-DUlV9yhw.js";import"./Dialog-DvjD4YKx.js";import"./Button-U5ni6oS0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIlt6lCU.js";import"./RSPContexts-BGMIawCG.js";import"./Collection-oIfF5eYU.js";import"./CollectionBuilder-DMu4xOhO.js";import"./Separator-DEURLoXk.js";import"./SearchField-Zb9DN-44.js";import"./useEvent-BqbWpWaQ.js";import"./SelectionManager-CshjmeDO.js";import"./useCollator-ThJgZh_Z.js";import"./FocusScope-D_7nktvV.js";import"./VisuallyHidden-CgNpbGUk.js";import"./Heading-CBcxX6lz.js";import"./Heading-BaNmqTkv.js";import"./getActionGroupSlot-dS8ZOAQm.js";import"./LoadingSpinner-ja7u21Ua.js";import"./react-children-utilities-BbGfH71u.js";import"./onlyText-CQUyu_RF.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
