import{r as M,j as r}from"./iframe-BEG7G6KF.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BsSgWl8Q.js";import{L as P}from"./Label-BWItg-fg.js";import{u as N,F as z,a as U}from"./Form-B44GHEDz.js";import{s as Y}from"./Action-DW9QNbuj.js";import{B as h}from"./Button-C8pjFnNt.js";import{m as Z}from"./IconWarning-a2LhFy5L.js";import{C as G}from"./CopyButton-D6sJk5cz.js";import"./PropsContextProvider-BB1dsjx4.js";import"./mergeRefs-CMO5wbBQ.js";import"./index-i7zmZRe4.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Ce2Todsu.js";import"./utils-LUgpLpbe.js";import"./Text-CjtFlosk.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Bu8ViuOf.js";import"./Hidden-CoHG5x6F.js";import"./useFocusRing-COhl_nbF.js";import"./useFocus-C-WlMmOQ.js";import"./TextField-BtimxscU.js";import"./Form-CRnDK1No.js";import"./useLabel-Bw-P6Vd2.js";import"./Label-14uT22y-.js";import"./useTextField-DYB1JFCS.js";import"./useFormReset-D7bUq-wz.js";import"./useControlledState-D4nWDDQs.js";import"./useFocusable-CiBlyEkt.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-wC63IlUB.js";import"./FieldDescription-DD32srnx.js";import"./Text-CsmURpVi.js";import"./browser-hhGcWijl.js";import"./EmulatedBoldText-BEr1TBhP.js";import"./Tooltip-BzY8EIeK.js";import"./OverlayArrow-DQ1DVDYI.js";import"./ProgressBar-ZHT95b40.js";import"./context-PcVqvq8B.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Bxu3MgFF.js";import"./ReactAriaControlledValueFix-BPvVbRNR.js";import"./ContextualHelpTrigger-C0ywhaKM.js";import"./Popover-Be_7n19e.js";import"./DialogTriggerView-QPowEEXn.js";import"./context-C9GFjuXq.js";import"./useStatic-HcSwkvD9.js";import"./Dialog-B1wekzMl.js";import"./Button-DTQhGa04.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CNi18aVS.js";import"./RSPContexts-BS1UUkSC.js";import"./Collection-Q6_7RVnG.js";import"./CollectionBuilder-BfQ_bfa9.js";import"./Separator-CEaf2o7P.js";import"./SearchField-DCAIqxcw.js";import"./useEvent-CaCnB0bX.js";import"./SelectionManager-CXVNswVM.js";import"./useCollator-CTD1PftI.js";import"./FocusScope-CVsbtSBN.js";import"./VisuallyHidden-DBx6majZ.js";import"./Heading-CqHSbf_u.js";import"./Heading-BWqSnswS.js";import"./getActionGroupSlot-P9UQ3z6q.js";import"./LoadingSpinner-SGV_yUHE.js";import"./react-children-utilities-ktrY2hXD.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
