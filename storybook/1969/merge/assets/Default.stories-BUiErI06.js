import{r as M,j as r}from"./iframe-DxsUlawc.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-ClaCVN9e.js";import{L as P}from"./Label-B7Tx4Pgn.js";import{u as N,F as z,a as U}from"./Form-UweLUich.js";import{s as Y}from"./Action-Bm6Z0jHH.js";import{B as h}from"./Button-IG1UbGgX.js";import{m as Z}from"./IconWarning-CxX_lufW.js";import{C as G}from"./CopyButton-Dl-7AEdy.js";import"./PropsContextProvider-xQDv9zm6.js";import"./mergeRefs-CIUzaBPj.js";import"./index-CXZ1ulCu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BogjW8MC.js";import"./utils-anS-nfaS.js";import"./Text-w8QkFxXB.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BM4Odlhy.js";import"./Hidden-DmCEYrWx.js";import"./useFocusRing-NqyRw62N.js";import"./useFocus-19elgRbR.js";import"./TextField-BV-7_CBI.js";import"./Form-DGyQGQrN.js";import"./useLabel-CBxP0DvO.js";import"./Label-DR2p3ljL.js";import"./useTextField-C34ms4nI.js";import"./useFormReset-C5585XYI.js";import"./useControlledState-BiaHUtte.js";import"./useFocusable-Dsjl8uYb.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B5iG2Dx8.js";import"./FieldDescription-BYp4Hrne.js";import"./Text-BghZAovJ.js";import"./browser-GG2yXHGk.js";import"./EmulatedBoldText-HMke4BSZ.js";import"./Tooltip-BhzPNsX-.js";import"./OverlayArrow-Cqrl2gO5.js";import"./ProgressBar-litaDe0V.js";import"./context-Pme8S34O.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-B7ecu7MW.js";import"./ReactAriaControlledValueFix-C9JO9OcQ.js";import"./ContextualHelpTrigger-Cp9Obzy_.js";import"./Popover-BzQAY9NU.js";import"./DialogTriggerView-BqpM7c71.js";import"./context-D1Ianu5s.js";import"./useStatic-DTmVdxCi.js";import"./Dialog-BhiDy3Uj.js";import"./Button-D6Z7YYpb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CuZIkaGu.js";import"./RSPContexts-D24GGWc4.js";import"./Collection-2mgYJ3lC.js";import"./CollectionBuilder-DUz18fnw.js";import"./Separator-MdtjVr6X.js";import"./SearchField-CP40iq6L.js";import"./useEvent-CBeKZXam.js";import"./SelectionManager-zRsSiPpC.js";import"./useCollator-DS1CRBkN.js";import"./FocusScope-_FVys5dN.js";import"./VisuallyHidden-DjzEMrNo.js";import"./Heading-BOztv1gg.js";import"./Heading-CLK_5_44.js";import"./getActionGroupSlot-DSGD8tPp.js";import"./LoadingSpinner-B_W_hnSA.js";import"./react-children-utilities-CrZdRBmV.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
