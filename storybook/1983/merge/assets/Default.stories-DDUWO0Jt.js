import{r as M,j as r}from"./iframe-Fj9rH4cM.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-XTOOO3wd.js";import{L as P}from"./Label-gqfIXoZt.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-Chz4h9P4.js";import{s as Y}from"./Action-TpguNNPB.js";import{B as h}from"./Button-CRDs1G82.js";import{q as Z}from"./IconWarning-BqHcxRer.js";import{C as G}from"./CopyButton-wTgOGcsB.js";import"./dynamic-BaCFTb0P.js";import"./PropsContextProvider-2d7AdEi8.js";import"./mergeRefs-DWVfDnig.js";import"./index-zrl6XAGz.js";import"./clsx-B-dksMZM.js";import"./FieldError-Dx-XJATE.js";import"./utils-1iPQLSxY.js";import"./Text-DCFUXQ-H.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DdYjb3kh.js";import"./Hidden-Duc9NbhT.js";import"./useFocusRing-CKWUlu0I.js";import"./useFocus-7HBUp4O0.js";import"./TextField-HFN8OYQm.js";import"./Form-OtjI-dAW.js";import"./useLabel-C-3cKpbA.js";import"./Label-BqD1zatE.js";import"./useTextField-CyljbYW8.js";import"./useFormReset-D9GIYNIc.js";import"./useControlledState-DkD4o1Gz.js";import"./useFocusable-DA60a4RB.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DmxLphhJ.js";import"./FieldDescription-4rZoU9rT.js";import"./Text-CY4-u4so.js";import"./browser-VEiFSO1p.js";import"./EmulatedBoldText-Ctpzt0x1.js";import"./Tooltip-CE9g652n.js";import"./OverlayArrow-DopxGRGn.js";import"./ProgressBar-BwsJFvfU.js";import"./context-qP4IgOj6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CEyIEfqZ.js";import"./ReactAriaControlledValueFix-IKWlnMi1.js";import"./ContextualHelpTrigger-BclbQDaW.js";import"./Popover-BFsrpBdt.js";import"./DialogTriggerView-cCV2n8WK.js";import"./context-qzo6W5cX.js";import"./useStatic-g6Dny9ho.js";import"./Button-ClJ-El1M.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CXUdxwPb.js";import"./RSPContexts-CZftLSNz.js";import"./FocusScope-ComN1xIG.js";import"./useCollator-Cv7Z6Bqm.js";import"./VisuallyHidden-6EX0wPu2.js";import"./Collection-DVpJlKDB.js";import"./CollectionBuilder-82bN8UBR.js";import"./Separator-B_gkWTuC.js";import"./SearchField-DV7b6fGA.js";import"./useEvent-UTIdhTs4.js";import"./SelectionManager-Cy5yrTgT.js";import"./Heading-B7USTBmU.js";import"./Heading-DqU28Gla.js";import"./useManagedValue-D0W28-hE.js";import"./getActionGroupSlot-DSTuqm6f.js";import"./LoadingSpinner-CK8GFOt2.js";import"./react-children-utilities-BIiGcz4O.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
