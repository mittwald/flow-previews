import{r as M,j as r}from"./iframe-Budb-7am.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DhnkFQB7.js";import{L as P}from"./Label-DzBJxL-G.js";import{u as N,F as z,a as U}from"./Form-DEfLTd7k.js";import{s as Y}from"./Action-B12Ua1Cm.js";import{B as h}from"./Button-DlmJA7gy.js";import{m as Z}from"./IconWarning-DHwZhMPm.js";import{C as G}from"./CopyButton-hFNQgEzZ.js";import"./PropsContextProvider-HNH7RKnU.js";import"./mergeRefs-BTIKDTd_.js";import"./index-BpM7E2Cn.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError--Cn4xsFj.js";import"./utils-BvIm0V7l.js";import"./Text-3Ba5r2Ha.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DBRwONdh.js";import"./Hidden-ldu86gX3.js";import"./useFocusRing-Dpjm87_-.js";import"./useFocus-Pkimm2oK.js";import"./TextField-BONCp9nZ.js";import"./Form-DC4Rz7ax.js";import"./useLabel-TSCdqSxt.js";import"./Label-RM_Po7kI.js";import"./useTextField-B5KjZWGb.js";import"./useFormReset-Y1wMMKwI.js";import"./useControlledState-SkoShBYt.js";import"./useFocusable-CC21Us72.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-YXSjvpRj.js";import"./FieldDescription-6ByGRMUQ.js";import"./Text-1Vh0OzT8.js";import"./browser-DtJAwUnv.js";import"./EmulatedBoldText-os5LgzLJ.js";import"./Tooltip-oXcYRGEv.js";import"./OverlayArrow-DviLC0jr.js";import"./ProgressBar-CfQlEPzK.js";import"./context-CJMSS7cd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CybNj2CY.js";import"./ReactAriaControlledValueFix-BoadMls3.js";import"./ContextualHelpTrigger-WiRy7s7x.js";import"./Popover-B2VYKz7m.js";import"./DialogTriggerView-DE1FaN1m.js";import"./context-BsbU81yG.js";import"./useStatic-DaioOtN4.js";import"./Dialog-D1PODoJe.js";import"./Button-DjLWq9Wn.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-loP-J0cx.js";import"./RSPContexts-Tr5byqnH.js";import"./Collection-CvfcDEqP.js";import"./CollectionBuilder-goJFEW7Y.js";import"./Separator-D8RFWE6v.js";import"./SearchField-CJT12BWN.js";import"./useEvent-Ced8YBYQ.js";import"./SelectionManager-CyTDI0bw.js";import"./useCollator-DG886A6G.js";import"./FocusScope-Bx0T309W.js";import"./VisuallyHidden-BhwKMH6u.js";import"./Heading-DfxA-4WF.js";import"./Heading-CwvqAa5X.js";import"./getActionGroupSlot-_4HxksMv.js";import"./LoadingSpinner-akPoSbp3.js";import"./react-children-utilities-CJJFVOoR.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
