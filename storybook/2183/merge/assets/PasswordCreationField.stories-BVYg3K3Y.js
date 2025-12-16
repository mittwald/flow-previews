import{r as x,j as r}from"./iframe-ChZoSAk9.js";import{u as c,F as f}from"./Form-0HSZJT_W.js";import{L as i}from"./Label-BtQBKk3e.js";import{F as h,t as S}from"./Field-Dene1CiM.js";import{B as t}from"./Button-igkSssls.js";import{S as g}from"./Section-aVFZU63j.js";import{A as E}from"./ActionGroup-BqXbSba3.js";import{s as F}from"./Action-CVNqq51W.js";import{d as C,O as R,P as n,n as o,r as V}from"./PasswordCreationField-BhSXC0RC.js";import{F as L}from"./FieldError-D0FcbU4f.js";import{R as b}from"./ResetButton-D8t4HRTr.js";import{S as j}from"./SubmitButton-2qWtJAAu.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B8p5n3S3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./index-0x3bxhbi.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./context-CKHtHj1o.js";import"./Label-8-s2XGsR.js";import"./utils-3orXHcy8.js";import"./Hidden-BToicrtl.js";import"./dynamic-D_MCnPMN.js";import"./IconApp-jg62nbZM.js";import"./remote-CMT6q-r_.js";import"./IconX-DwN0CpwU.js";import"./IconCheck-Cb9yObnt.js";import"./Text-DeId_uwd.js";import"./EmulatedBoldText-D79YiaqZ.js";import"./Text-DWCX6muZ.js";import"./LoadingSpinner-hNvoN1cU.js";import"./ariaLive-BdEv9LdA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BAWw_35t.js";import"./ProgressBar-Bd4jHgjB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwTIrFfL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEbKEOpz.js";import"./useFocus-BEqWk0b2.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocusable-BQrvJ6Oj.js";import"./ContextMenuSection-b1V79oDp.js";import"./lib-90ocxLs-.js";import"./Dialog-B1ggtFGC.js";import"./RSPContexts-BuIIeKa7.js";import"./OverlayArrow-BwEdTwQI.js";import"./useControlledState-CXwLHBKW.js";import"./Collection-CxsVz65g.js";import"./CollectionBuilder-Dc1RsPXG.js";import"./SelectionIndicator-BZmDBgq9.js";import"./Separator-h8DcfgTk.js";import"./SelectionManager-B2umJv1d.js";import"./useEvent-D5qx-uIw.js";import"./useCollator-DVwfKBY9.js";import"./FocusScope-DTg-yLmD.js";import"./VisuallyHidden-TRsVH-0B.js";import"./getActionGroupSlot-D9Q9Xlmq.js";import"./useStatic-YkfQLHoK.js";import"./context-DK_eOJFA.js";import"./FieldDescription-C8pMBaks.js";import"./Tooltip-AmZe9SEA.js";import"./TranslationProvider-CKNgrhg6.js";import"./IconCircleCheck-DyvU8reI.js";import"./ContextualHelpTrigger-BN-mU_uj.js";import"./Popover-DbbRxBDt.js";import"./OverlayContextProvider-CAospS2T.js";import"./useOverlayController-Dp1HHV7H.js";import"./OverlayTrigger-Do-fZ53q.js";import"./IconInfo-DHgWbHqo.js";import"./Heading-BFoi8RIL.js";import"./Heading-zVGhBSeg.js";import"./useFieldComponent-CTbZHLtq.js";import"./useControlledHostValueProps-COJ6lWMZ.js";import"./TextField-B5JGrl3J.js";import"./FieldError-krJUZi9_.js";import"./Form-DiR4hcFZ.js";import"./Group-BO5rtvFF.js";import"./Input-C1UIQQj8.js";import"./useTextField-BJpggVQl.js";import"./useFormReset-DlW87ulD.js";import"./useFormValidation-DrPCugNK.js";import"./IconDanger-bNuP_yaN.js";import"./useRef-ChzQuoTx.js";const y=(e=C)=>{const a=x.useMemo(()=>R.fromDeclaration(e),[e]),m=x.useRef(null);return async s=>{if(s!==""){if(m.current?.password===s)return m.current.isValid;try{const w=await(await a.validate(s)).isValid;return m.current={password:s,isValid:w},w}catch{return!1}}}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,O=v("submit"),P={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[V.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:h,render:()=>{const e=async s=>{await F(1e3),O(s)},a=c({defaultValues:{user:""}}),m=S();return r.jsx(f,{form:a,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:y()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(E,{children:[r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})]})})}},d={},l={render:()=>{const e=c({defaultValues:{password:""}});return r.jsxs(f,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(h,{rules:{required:!0,validate:y(P)},name:"password",children:r.jsxs(n,{validationPolicy:P,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}},u={render:()=>{const e=c({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=c({defaultValues:{field:""}});return r.jsxs(f,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(b,{children:"Reset"}),r.jsx(j,{children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        validate: usePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const ce=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,ce as __namedExportsOrder,pe as default};
