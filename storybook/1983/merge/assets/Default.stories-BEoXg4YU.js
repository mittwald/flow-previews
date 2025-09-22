import{r as M,j as r}from"./iframe-CTVhNlXB.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-BXRckjWP.js";import{L as P}from"./Label-BH61eOAw.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DtVe-xPb.js";import{s as Y}from"./Action-Du5VgD8q.js";import{B as h}from"./Button-dCi6y-L9.js";import{q as Z}from"./IconWarning-DczNnEus.js";import{C as G}from"./CopyButton-DaqekhrN.js";import"./dynamic-DKLrnrux.js";import"./PropsContextProvider-BdKgywzy.js";import"./mergeRefs-HXCFtCCZ.js";import"./index-B0CJcMgs.js";import"./clsx-B-dksMZM.js";import"./FieldError-Db2L6cd5.js";import"./utils-DolbARJ8.js";import"./Text-Mnh5Jpbt.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BvpcRFuc.js";import"./Hidden-CCSOhlCd.js";import"./useFocusRing-BklgwE0b.js";import"./useFocus-B_Alw_Kd.js";import"./TextField-CCmvbP69.js";import"./Form-BPrp3nIT.js";import"./useLabel-Cu4D06kD.js";import"./Label-BzU31htm.js";import"./useTextField-S5PdSn0a.js";import"./useFormReset-E2HVy4kF.js";import"./useControlledState-L5KsJeFF.js";import"./useFocusable-DI6rxpio.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CUzLiqhG.js";import"./FieldDescription-d0lfKbrQ.js";import"./Text-BLo0dekR.js";import"./browser-DlHr08AR.js";import"./EmulatedBoldText-YiQdYmo2.js";import"./Tooltip-9nx3qbvB.js";import"./ClearPropsContextView-mfz5hcjJ.js";import"./ProgressBar-CFHcvSgt.js";import"./context-OLvSZRNo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BRqbPR-6.js";import"./ReactAriaControlledValueFix-BOm2ADcy.js";import"./ContextualHelpTrigger-C7FhUd_r.js";import"./Popover-CVq2IpQ_.js";import"./DialogTriggerView-Bcwx9J50.js";import"./context-C7a-dRgh.js";import"./useStatic-DGBPTsqJ.js";import"./Button-D-RdbR2Z.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-By95yFbD.js";import"./RSPContexts-dwc2BRmP.js";import"./FocusScope-DSxBaVHz.js";import"./useCollator-CEh5JEF4.js";import"./VisuallyHidden-oOW_UkZ8.js";import"./Collection-DZ2C53It.js";import"./CollectionBuilder-CiesGU-z.js";import"./Separator-BvYvyYPM.js";import"./SearchField-BNsFe36r.js";import"./useEvent-Th5L4n2g.js";import"./SelectionManager-e7sW0Ylz.js";import"./Heading-0AC12sSW.js";import"./Heading-BJNMdoAY.js";import"./useManagedValue-C2L2DeKk.js";import"./getActionGroupSlot-W2GZrEk6.js";import"./LoadingSpinner-DJM9ERHN.js";import"./react-children-utilities-Cy_ywrKS.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
