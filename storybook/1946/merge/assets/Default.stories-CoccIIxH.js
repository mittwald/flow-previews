import{r as M,j as r}from"./iframe-r9Fl_3r-.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-D3xayqa8.js";import{L as P}from"./Label-DgY637fA.js";import{u as N,F as z,a as U}from"./Form-DruQpksO.js";import{s as Y}from"./Action-B5PNSonE.js";import{B as h}from"./Button-D0ktHzCI.js";import{m as Z}from"./IconWarning-BUxpotmw.js";import{C as G}from"./CopyButton-DAqlEyxv.js";import"./PropsContextProvider-_w1UeHmF.js";import"./mergeRefs-D6E7Ef6S.js";import"./index-CrBYWkM2.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-D3xuSMMg.js";import"./utils-DXh-iENK.js";import"./Text-DHfFA3io.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BdAgZaYl.js";import"./Hidden-BJHVOqWC.js";import"./useFocusRing-C_G4oYuI.js";import"./useFocus-DRS9ufOF.js";import"./TextField-BiW4cyB4.js";import"./Form-D9IRbY4n.js";import"./useLabel-DoVt-K4x.js";import"./Label-C3TZzzex.js";import"./useTextField-Bg6cyBen.js";import"./useFormReset-DxbIlA0W.js";import"./useControlledState-Bxg_NaN0.js";import"./useFocusable-DI-LrkzR.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B_shqPON.js";import"./FieldDescription-DoaPcd7E.js";import"./Text-DD-b1p2M.js";import"./browser-tiRbxzJD.js";import"./EmulatedBoldText-CDsZBMJH.js";import"./Tooltip-k_WJwhMX.js";import"./OverlayArrow-HXzjk5ZA.js";import"./ProgressBar-BsRRuR7U.js";import"./context-B1eqcBF6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BlChhJwn.js";import"./ReactAriaControlledValueFix-qzhLZtrn.js";import"./ContextualHelpTrigger-BlRkXjRs.js";import"./Popover-DRfqiDmT.js";import"./DialogTriggerView-C_n5cTLw.js";import"./context-D7mbIFkz.js";import"./useStatic-Dwli2ElM.js";import"./Dialog-CqKbtFhs.js";import"./Button-4Qe77JoQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CjAT5thu.js";import"./RSPContexts-Bz7sSPBE.js";import"./Collection-DOWMAROO.js";import"./CollectionBuilder-CqQF4tYs.js";import"./Separator-Z9TJ6XEa.js";import"./SearchField-DOWcWepW.js";import"./useEvent-Dowxq_UB.js";import"./SelectionManager-BmeUKben.js";import"./useCollator-B2W9GfqU.js";import"./FocusScope-C8ZyuACd.js";import"./VisuallyHidden-CHwjrWyl.js";import"./Heading-D97qHWnP.js";import"./Heading-BfSyYlEK.js";import"./getActionGroupSlot-DpUiS5SY.js";import"./LoadingSpinner-zCjOjpaf.js";import"./react-children-utilities-JlbI5-ew.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
