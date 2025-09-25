import{r as M,j as r}from"./iframe-DSMxFmCo.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-C1D8q1g0.js";import{L as P}from"./Label-BPw_TKwN.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BPy5K8ye.js";import{s as Y}from"./Action-BWiQvpwE.js";import{B as h}from"./Button-B4iADtHJ.js";import{p as Z}from"./IconWarning-BVk6tlGE.js";import{C as G}from"./CopyButton-BgGCRepO.js";import"./index-Cun1SEai.js";import"./dynamic-BKY_zed6.js";import"./PropsContextProvider-DVyBiVg_.js";import"./mergeRefs-R9qg0vBI.js";import"./index-GrlXgZoZ.js";import"./clsx-B-dksMZM.js";import"./FieldError-BW2b_CY4.js";import"./utils-V6gMnCgM.js";import"./Text-CUE1Abh-.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BWyHWrMQ.js";import"./useFocusRing-B0fHsvyn.js";import"./useFocus-rqOLNBQE.js";import"./Input-BJPqjrJL.js";import"./Hidden-D2GOYXns.js";import"./TextField-CSPqcn3E.js";import"./context-n-efbKpz.js";import"./Form-C9nVsKAF.js";import"./useLabel-CGRenFpR.js";import"./Label-BX8mTcFT.js";import"./useTextField-CR5IN1Cj.js";import"./useFormReset-BfhIxfM0.js";import"./useControlledState-Bd9qDCZc.js";import"./useFocusable-CWTiV4pp.js";import"./useFormValidation-64eNngsb.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CcqfZkr-.js";import"./FieldDescription-DiMlr0Yy.js";import"./Text-D_0LfN4x.js";import"./browser-R7FwPwL5.js";import"./EmulatedBoldText-DCelI_Fa.js";import"./Tooltip-BD1589HO.js";import"./ClearPropsContextView-DgWNLgLQ.js";import"./ProgressBar-X6kaEndn.js";import"./context-64LigRkb.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Dk8jStlZ.js";import"./ReactAriaControlledValueFix-BewE66gb.js";import"./ContextualHelpTrigger-T5dAmm6t.js";import"./Popover-JtzXSHjL.js";import"./DialogTriggerView-CRRade0J.js";import"./context-eOFRYD3C.js";import"./useStatic-Bf1fNjch.js";import"./Button-a5-NScD1.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CpWBfHNM.js";import"./RSPContexts-yTBIWgKj.js";import"./FocusScope-DaPMN8_C.js";import"./useCollator-CouZLuEw.js";import"./VisuallyHidden-D9pE8D_t.js";import"./Collection-BjFS4X2Q.js";import"./CollectionBuilder-Csq46UyD.js";import"./Separator-BzacB-Ho.js";import"./SelectionManager-DnqUUNzH.js";import"./useEvent-CC0ROtua.js";import"./Heading-5UcSZr4b.js";import"./Heading-Bt4IwNny.js";import"./useManagedValue-n6tfxU7t.js";import"./getActionGroupSlot-DXwV-t9Z.js";import"./LoadingSpinner-DrTN5ZSN.js";import"./react-children-utilities-O9e5UPjQ.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
