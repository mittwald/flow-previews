import{r as v,j as r}from"./iframe-CBVsO-nV.js";import{a as c,u as f,F as h,t as O}from"./Form-CMN9qLLC.js";import{L as i}from"./Label-nyljzuzS.js";import{B as o}from"./Button-CsBApO8I.js";import{S as q}from"./Section-B5x6AEB8.js";import{A as T}from"./ActionGroup-BWlbeHnL.js";import{s as F}from"./Action-D49cMU0u.js";import{d as _,O as D,P as n,n as t,r as W}from"./PasswordCreationField-D9iQjiII.js";import{e as R}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{F as A}from"./useFieldComponent-BL--pJL1.js";import"./index-Cun1SEai.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./clsx-B-dksMZM.js";import"./index-CObDYv0S.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./context-DPyuhdQa.js";import"./browser-C8nzMZsV.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bbbf1klh.js";import"./utils-BP7SriO_.js";import"./Hidden-CLTlUYi-.js";import"./IconWarning-BYVfnYfe.js";import"./Text-4FHUoZpl.js";import"./EmulatedBoldText-oVXJv8rD.js";import"./Text-GjNUVhom.js";import"./LoadingSpinner-B8NSHT58.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4bPWs-y1.js";import"./ProgressBar-I-zazMLu.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-tISAzguc.js";import"./useFocus-DaXdFBHM.js";import"./useFocusRing-CMejcKZt.js";import"./useFocusable-BZqSTg_W.js";import"./ContextMenuSection-CKXjql2z.js";import"./Dialog-CSsaqFoB.js";import"./RSPContexts-DsHkjJhu.js";import"./OverlayArrow-D5IM8mFd.js";import"./useControlledState-CX82Bv9G.js";import"./Collection-D1Yf9Sy6.js";import"./CollectionBuilder-Dw4MtH9U.js";import"./SelectionIndicator-DFyYkHVA.js";import"./Separator-Cet5gXTt.js";import"./SelectionManager-BHGqi2o_.js";import"./useEvent-51-loX5F.js";import"./useCollator-CcT-BTV3.js";import"./FocusScope-B4rhd8wm.js";import"./VisuallyHidden-OgSsWZyt.js";import"./dynamic-B9g8bFyj.js";import"./getActionGroupSlot-Dv-xsI8W.js";import"./useStatic-B-RdiA9k.js";import"./context-BHCJLPq_.js";import"./Group-Cz9MSlsI.js";import"./Input-Bo67AZIS.js";import"./TextField-Bk_yv6i3.js";import"./Form-CSBASJMX.js";import"./useTextField-Dmd_cSub.js";import"./useFormReset-0NTNnrBe.js";import"./useFormValidation-DWnxi1QZ.js";import"./FieldDescription-BsgENOjc.js";import"./Tooltip-xg6PcfMV.js";import"./ClearPropsContextView-QpnEsTY7.js";import"./ClearPropsContext-5iY_SzG7.js";import"./ReactAriaControlledValueFix-DsZdc0Eu.js";import"./ContextualHelpTrigger-BAh6GFGL.js";import"./Popover-BoMfAEAN.js";import"./useOverlayController-bzn2dAFT.js";import"./OverlayContextProvider-Cs-mhJj1.js";import"./OverlayTrigger-BJ_N81ja.js";import"./ControlledNotification-BO8wBLSg.js";import"./Heading-CaqOKZxe.js";import"./Heading-Dr3JxnqR.js";import"./useManagedValue-C-46omYf.js";import"./react-children-utilities-Da5w6g_X.js";const I=(e=_)=>{const a=v.useMemo(()=>D.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return R(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:k}=__STORYBOOK_MODULE_ACTIONS__,M=k("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[W.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),M(s)},a=f({defaultValues:{user:""}}),m=O();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(q,{children:[r.jsx(m,{name:"user",rules:{required:"Jo dwag a password is required!"},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(T,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:I(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return v.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(A,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};var b,w,P;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(P=(w=d.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var j,y,g;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
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
        validate: generatePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var B,S,E;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <PasswordCreationField defaultValue={""} isInvalid>
          <Label>Password</Label>
          <Button>asd</Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </PasswordCreationField>
        <PasswordCreationField defaultValue={""}>
          <Label>Password</Label>
          <Button>asd</Button>
        </PasswordCreationField>
      </Form>;
  }
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var C,V,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(L=(V=p.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const ue=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,ue as __namedExportsOrder,le as default};
