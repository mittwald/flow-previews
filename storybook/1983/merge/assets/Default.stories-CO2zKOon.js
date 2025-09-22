import{r as M,j as r}from"./iframe-Ci7am5-x.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-BSIEb2Na.js";import{L as P}from"./Label-OU3LAgfN.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BPQbWRCw.js";import{s as Y}from"./Action-LHdszVl-.js";import{B as h}from"./Button-BxQcAiXL.js";import{q as Z}from"./IconWarning-CzB8zWov.js";import{C as G}from"./CopyButton-DItfDq3n.js";import"./dynamic-BJQQnM_P.js";import"./PropsContextProvider-CQR7cNuW.js";import"./mergeRefs-BZZ4k-un.js";import"./index-BSkYpBON.js";import"./clsx-B-dksMZM.js";import"./FieldError-DZKw4mWV.js";import"./utils-D8LfxOEa.js";import"./Text-CnPMclzL.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Blfbn2Yc.js";import"./Hidden-6Fb8M7jx.js";import"./useFocusRing-D6Pp4FJL.js";import"./useFocus-ayIEkHl9.js";import"./TextField-VePiy-Wr.js";import"./Form-BeUBWT2I.js";import"./useLabel-TZmyIU6H.js";import"./Label-j8HR0Ono.js";import"./useTextField-BBAHXs5i.js";import"./useFormReset-g9Y9sN6W.js";import"./useControlledState-D4tytcWm.js";import"./useFocusable-ChczIcK6.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BJNFa7O1.js";import"./FieldDescription-BTmPq6eh.js";import"./Text-QWIhyI-d.js";import"./browser-1MQn7X-d.js";import"./EmulatedBoldText-Cc0xL4Af.js";import"./Tooltip-BCPbREw4.js";import"./ClearPropsContextView-QzLGn3tG.js";import"./ProgressBar-D-kh5LUH.js";import"./context-CzmRZySI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BI8Ehzs7.js";import"./ReactAriaControlledValueFix-BdSr4TbK.js";import"./ContextualHelpTrigger-D2DwL7c5.js";import"./Popover-Dm762mUl.js";import"./DialogTriggerView-DeMR5m7g.js";import"./context-Bg2fb23R.js";import"./useStatic-B16OfDVI.js";import"./Button-ByeNiRqN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C06syjH3.js";import"./RSPContexts-DC069Ofk.js";import"./FocusScope-2jIUVF7d.js";import"./useCollator-CP32wxPf.js";import"./VisuallyHidden-Bwug4jVH.js";import"./Collection-DbXsSG3M.js";import"./CollectionBuilder-CfQBwOi0.js";import"./Separator-DH-Qy1Ob.js";import"./SearchField-DgvC1Z9-.js";import"./useEvent-Cyd1cJwZ.js";import"./SelectionManager-DuM_3MOM.js";import"./Heading-D4H4HR75.js";import"./Heading-De3U1nCH.js";import"./useManagedValue-CK8d6kwA.js";import"./getActionGroupSlot-q-TSSyCY.js";import"./LoadingSpinner-t4rMaxgL.js";import"./react-children-utilities-CRquUwi_.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
