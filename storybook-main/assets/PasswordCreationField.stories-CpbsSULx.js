import{r as b,j as r}from"./iframe-CgV0BA21.js";import{a as c,u as f,F as h,t as w}from"./Form-Njtp-qwK.js";import{L as i}from"./Label-Bxuf1S0W.js";import{B as o}from"./Button-CNT8DxS9.js";import{S as P}from"./Section-sLT7TF5r.js";import{A as j}from"./ActionGroup-uSz-erXb.js";import{s as F}from"./Action-DZ2Xrd6d.js";import{d as y,O as g,P as n,n as t,r as B}from"./PasswordCreationField-UDjpzycR.js";import{e as S}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{F as E}from"./useFieldComponent-D1IKYPO_.js";import"./index-nuYtCEEu.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./clsx-B-dksMZM.js";import"./index-LOR_5P9o.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./context-DHnf2uKc.js";import"./browser-BkNcCpiL.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CttY7hce.js";import"./utils-BtxgbS4l.js";import"./Hidden-jMQa5TyR.js";import"./IconWarning-Cjg_6qhe.js";import"./Text-BKw3N1Oz.js";import"./EmulatedBoldText-DlIqC6uZ.js";import"./Text-DoKxmv7q.js";import"./LoadingSpinner-CAf9aLu0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxfThd7-.js";import"./ProgressBar-Buubgbe8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B3KDK_sh.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dh998neg.js";import"./useFocus-DCA5O52l.js";import"./useFocusRing-D4YLibcx.js";import"./useFocusable-CmuVkcp6.js";import"./ContextMenuSection-DduOvbG6.js";import"./Dialog-BuxTXh7Q.js";import"./RSPContexts-B0Fd51Ht.js";import"./OverlayArrow-B-9LgXoP.js";import"./useControlledState-REzwF7fx.js";import"./Collection-PQKx517l.js";import"./CollectionBuilder-BH1gKqtM.js";import"./SelectionIndicator-Bn-FIAma.js";import"./Separator-DWGZbVju.js";import"./SelectionManager-QPmO5O-V.js";import"./useEvent-DaVswHd3.js";import"./useCollator-vRN69CzX.js";import"./FocusScope-0arVmBSz.js";import"./VisuallyHidden-7bLCXWCd.js";import"./dynamic-BuNxxpAs.js";import"./getActionGroupSlot-rfX1hTYj.js";import"./useStatic-BN9Sd72d.js";import"./context-CRjcTZWJ.js";import"./Group-BkfrkqlC.js";import"./Input-CWgJEKQk.js";import"./TextField-BCrL9C4z.js";import"./Form-Co57238C.js";import"./useTextField-bAvx5s3l.js";import"./useFormReset-DmIBBfXo.js";import"./useFormValidation-AnXxOg_8.js";import"./FieldDescription-CQY0EwbT.js";import"./Tooltip-CUNaUHGg.js";import"./ClearPropsContextView-k4P5ol-4.js";import"./ClearPropsContext-BLhIxcUa.js";import"./ReactAriaControlledValueFix-Du2y8LR1.js";import"./ContextualHelpTrigger-BuK9V5Ns.js";import"./Popover-CzgnrOjG.js";import"./useOverlayController-DHYUmg62.js";import"./OverlayContextProvider-DUFKTZaq.js";import"./OverlayTrigger-BQrHQUPN.js";import"./ControlledNotification-Dx7XpGvC.js";import"./Heading--VfPtVyJ.js";import"./Heading-CdcvmK3e.js";import"./useManagedValue-DilwxyV8.js";import"./react-children-utilities-D5-pLFdL.js";const C=(e=y)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[B.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:"Jo dwag a password is required!"},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(j,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:C(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const re=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,re as __namedExportsOrder,$r as default};
