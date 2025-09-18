import{r as M,j as r}from"./iframe-DjIVRH0F.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-BnETP4Uz.js";import{L as P}from"./Label-oyqcLq-C.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-CcZpKu0K.js";import{s as Y}from"./Action-D8dMCYGJ.js";import{B as h}from"./Button-CKSxfzxQ.js";import{q as Z}from"./IconWarning-uc5JkYTm.js";import{C as G}from"./CopyButton-CrPOEErC.js";import"./dynamic-BVw0yKPJ.js";import"./PropsContextProvider-DXkyia6O.js";import"./mergeRefs-CZW2uA-H.js";import"./index-Bk9vRPW2.js";import"./clsx-B-dksMZM.js";import"./FieldError-NAgWSsRG.js";import"./utils-G1KHONaq.js";import"./Text-9ugGFdig.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C6OJiXrI.js";import"./Hidden-BYb4omOQ.js";import"./useFocusRing-CVljaIJQ.js";import"./useFocus-diUUCuvP.js";import"./TextField-BtiUxXGx.js";import"./Form-Dzmx2_fB.js";import"./useLabel-sV0m1Yjo.js";import"./Label-C0V31i8v.js";import"./useTextField-CS3TmGDB.js";import"./useFormReset-BnKMoc5n.js";import"./useControlledState-Cd9JFs6w.js";import"./useFocusable-DNULE2pv.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BR6tEJBc.js";import"./FieldDescription-MCxveWnQ.js";import"./Text-B5KpGvlT.js";import"./browser-Ba6KZWy-.js";import"./EmulatedBoldText-BSrsAcTM.js";import"./Tooltip-B3TZt8De.js";import"./ClearPropsContextView-BhG_516u.js";import"./ProgressBar-BaoSLR_g.js";import"./context-C7KKbhVC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DnbCLLYR.js";import"./ReactAriaControlledValueFix-BO_bl36T.js";import"./ContextualHelpTrigger-C3n34wqe.js";import"./Popover-DlX03nO8.js";import"./DialogTriggerView-CgY0Mhwe.js";import"./context-DDhUpvCG.js";import"./useStatic-CHo6Lgk7.js";import"./Button-D_xR0uNa.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-QkjqUEXJ.js";import"./RSPContexts-yaPVYaSw.js";import"./FocusScope-CAKHANYN.js";import"./useCollator-CAX-XvSk.js";import"./VisuallyHidden-snqvTAFU.js";import"./Collection-CjltVSE8.js";import"./CollectionBuilder-CJ_fIWoO.js";import"./Separator-BOn94nxb.js";import"./SearchField-CkG4r_An.js";import"./useEvent-DGXxwH7A.js";import"./SelectionManager-Btp5kxfY.js";import"./Heading-C_7DG7tq.js";import"./Heading-ncY8Dy_7.js";import"./useManagedValue-F347-vBf.js";import"./getActionGroupSlot-vPbFTM92.js";import"./LoadingSpinner-BHwXHxWg.js";import"./react-children-utilities-EGEevDne.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
