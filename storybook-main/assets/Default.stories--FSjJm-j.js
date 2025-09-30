import{r as M,j as r}from"./iframe-Cb4Rgx0e.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-Bu_pPSPD.js";import{L as P}from"./Label-BaR_Jp0n.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BF3A0K6j.js";import{s as Y}from"./Action-DcFJ4Fb5.js";import{B as h}from"./Button-H4sh-QDS.js";import{p as Z}from"./IconWarning-BnvsEgCq.js";import{C as G}from"./CopyButton-BNMGUzqT.js";import"./index-Cun1SEai.js";import"./dynamic-PM36Lxvz.js";import"./PropsContextProvider-CbnVRX13.js";import"./mergeRefs-FGc6ILVF.js";import"./index-BCJuwVXE.js";import"./clsx-B-dksMZM.js";import"./FieldError-BgWprM1s.js";import"./utils-ClJ9kHS9.js";import"./Text-U_OSpJmR.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C_iyrCYK.js";import"./useFocusRing-BzqCweW_.js";import"./useFocus-DShqRyJ9.js";import"./Input-CC07jkqr.js";import"./Hidden-WIE7yK1s.js";import"./TextField-PT7iHZQg.js";import"./context-DsHIbBn4.js";import"./Form-Bg0W0weo.js";import"./useLabel-YUMynDBh.js";import"./Label-BSwFIexW.js";import"./useTextField-CtknEU75.js";import"./useFormReset-XDrOOyWm.js";import"./useControlledState-CQK5P4gM.js";import"./useFocusable-Dx7vOlYc.js";import"./useFormValidation-CF7ZQkcY.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BQp9Q2iV.js";import"./FieldDescription-CYs7P1qA.js";import"./Text-B7bLqwrq.js";import"./browser-GZXaf9ZM.js";import"./EmulatedBoldText-BOxB1C6V.js";import"./Tooltip-DZ54GNRl.js";import"./ClearPropsContextView-CBJyDj7P.js";import"./ProgressBar-DhcjamRH.js";import"./context-CW2oe5vS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DhwOH6Jh.js";import"./ReactAriaControlledValueFix-BFlZHtZa.js";import"./ContextualHelpTrigger-B_D-IZrp.js";import"./Popover-CIu4Zu5_.js";import"./DialogTriggerView-BiIifotB.js";import"./context-DxjXV7eH.js";import"./useStatic-CfZfNe1T.js";import"./Button-CEnLKZ0o.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Q8MCvqvF.js";import"./RSPContexts-WcRCGlYY.js";import"./FocusScope-soGnmPtw.js";import"./useCollator-BXysv4D3.js";import"./VisuallyHidden-CjQvb6dT.js";import"./Collection-CuwOpF0o.js";import"./CollectionBuilder-BboySDMU.js";import"./Separator-BKeFtAeg.js";import"./SelectionManager-CDVGcynV.js";import"./useEvent-DD3xMrdQ.js";import"./Heading-DkmYDwus.js";import"./Heading-Bdg4szuX.js";import"./useManagedValue-D_wW5JI-.js";import"./getActionGroupSlot-CMriNb6k.js";import"./LoadingSpinner-CjRzs_7S.js";import"./react-children-utilities-hdthmQ_2.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const Po=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,Po as __namedExportsOrder,ho as default};
