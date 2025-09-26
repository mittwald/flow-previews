import{r as M,j as r}from"./iframe-Dp_ptgTO.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DyfyrkJ7.js";import{L as P}from"./Label-Bfe7G6ov.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-ByP6LItT.js";import{s as Y}from"./Action-D8BJShfM.js";import{B as h}from"./Button-Bm7Tf187.js";import{p as Z}from"./IconWarning-CESkhJY3.js";import{C as G}from"./CopyButton-DXNcU-rx.js";import"./index-Cun1SEai.js";import"./dynamic-N86xW7wt.js";import"./PropsContextProvider-BVkYESiU.js";import"./mergeRefs-Ct0p8Qt4.js";import"./index-4oHG5ZZP.js";import"./clsx-B-dksMZM.js";import"./FieldError-Izh2_fYp.js";import"./utils-jLhJmKpa.js";import"./Text--dlrpEAx.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D-YhKZJB.js";import"./useFocusRing-MWP1ZcQm.js";import"./useFocus-BGDVbxBE.js";import"./Input-ma6DJJKp.js";import"./Hidden-g0k1R_XW.js";import"./TextField-BJgtSOFG.js";import"./context-DhKk3IGs.js";import"./Form-v2gdHsY3.js";import"./useLabel-CuGJ_WBQ.js";import"./Label-BqJm3nBk.js";import"./useTextField-_OLRvzuM.js";import"./useFormReset-CqaGS40P.js";import"./useControlledState-rqltzUWl.js";import"./useFocusable-Pd3lvrKn.js";import"./useFormValidation-CyColpPY.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BlMfL7YS.js";import"./FieldDescription-_sE_f3No.js";import"./Text-DKCpryII.js";import"./browser-D6_L72sC.js";import"./EmulatedBoldText-RaOWrRWm.js";import"./Tooltip-xeZooFL5.js";import"./ClearPropsContextView-BbJozVRy.js";import"./ProgressBar-DMXo3Oxb.js";import"./context-dvnbYm3m.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Bz9yQxqy.js";import"./ReactAriaControlledValueFix-lEod25kb.js";import"./ContextualHelpTrigger-BdQ__Lc0.js";import"./Popover-CLhZGReB.js";import"./DialogTriggerView-VHLYNpVx.js";import"./context-DDTw2-bn.js";import"./useStatic-m8l0C_TU.js";import"./Button-CtqZigcv.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DgTBEQGy.js";import"./RSPContexts-B9nFdFkt.js";import"./FocusScope-B49GjYPu.js";import"./useCollator-DfaTpKsx.js";import"./VisuallyHidden-pbsZsV6L.js";import"./Collection-DhlfIuKx.js";import"./CollectionBuilder-D4MRH1wH.js";import"./Separator-BGudjOFK.js";import"./SelectionManager-BktYLEMf.js";import"./useEvent-BAkCuTus.js";import"./Heading-ffyrPZO9.js";import"./Heading-VpbVhQYC.js";import"./useManagedValue-XYtfrINT.js";import"./getActionGroupSlot-DyRiGzXE.js";import"./LoadingSpinner-CO7k3E9d.js";import"./react-children-utilities-DPW0iKtZ.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
