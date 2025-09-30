import{r as M,j as r}from"./iframe-oDnSRKrU.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-C-4iy6Rk.js";import{L as P}from"./Label-DdcSy8o6.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BxXqQblL.js";import{s as Y}from"./Action-BMGnqQDt.js";import{B as h}from"./Button-Cfj_belE.js";import{p as Z}from"./IconWarning-BDchKd2I.js";import{C as G}from"./CopyButton-xas1FKIq.js";import"./index-Cun1SEai.js";import"./dynamic-B66wdgIv.js";import"./PropsContextProvider-DCrF-e2x.js";import"./mergeRefs-4PJ6advV.js";import"./index-DTS24oU_.js";import"./clsx-B-dksMZM.js";import"./FieldError-Cv1iD8Fq.js";import"./utils-BOFgiu6B.js";import"./Text-BhCBXCIE.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BZ_dBAGe.js";import"./useFocusRing-BvVC0KGc.js";import"./useFocus-CBAj8SSC.js";import"./Input-BviYuwQ8.js";import"./Hidden-B7YQi_X1.js";import"./TextField-BhUX-Snw.js";import"./context-D1pfjzoG.js";import"./Form-HfZRlNH7.js";import"./useLabel-IKTU3VFM.js";import"./Label-pm9yE2cO.js";import"./useTextField-C3G6D0-T.js";import"./useFormReset-m0r5jrEx.js";import"./useControlledState-C4SjqBt9.js";import"./useFocusable-BIMsrSRy.js";import"./useFormValidation-CpLCzOC_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CEpLicN2.js";import"./FieldDescription-DoMeWMhu.js";import"./Text-BRg3dDEW.js";import"./browser-B1IGKoaP.js";import"./EmulatedBoldText-EQ8sxSlk.js";import"./Tooltip-iRWYXsvR.js";import"./ClearPropsContextView-C5KU2xgH.js";import"./ProgressBar-BuCs3ZnW.js";import"./context-BACVj_LI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DYhwfjLN.js";import"./ReactAriaControlledValueFix-p0Vw7kd4.js";import"./ContextualHelpTrigger-DcyjziYh.js";import"./Popover-BAr3bKt4.js";import"./DialogTriggerView-Ce3L8qPr.js";import"./context-BfF8CEMr.js";import"./useStatic-B5fiOOMU.js";import"./Button-D46_pkFx.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BlfeWo8-.js";import"./RSPContexts-wR3TIPq6.js";import"./FocusScope-CFc2lXVF.js";import"./useCollator-BUiMLO_A.js";import"./VisuallyHidden-D8Dskj69.js";import"./Collection-B4_H5DyP.js";import"./CollectionBuilder-BqrWk4D3.js";import"./Separator-DoYImFmL.js";import"./SelectionManager-D05r5y9b.js";import"./useEvent-DUbYFqCh.js";import"./Heading-XUur3sa-.js";import"./Heading-m29PahKq.js";import"./useManagedValue-CH2BnLNL.js";import"./getActionGroupSlot-DD5xlWbQ.js";import"./LoadingSpinner-DjOmL5Rt.js";import"./react-children-utilities-U-_V-Pos.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
