import{r as b,j as r}from"./iframe-BQyHcTNh.js";import{a as c,u as f,F as h,t as j}from"./Form-Dghv3XBA.js";import{L as i}from"./Label-JK740Dk1.js";import{B as o}from"./Button-ieCP1ArV.js";import{S as w}from"./Section-D4fUAwGu.js";import{A as y}from"./ActionGroup-WBeyu3m_.js";import{s as F}from"./Action-Bi6tM7BN.js";import{d as B,O as g,P as n,n as t,r as S}from"./PasswordCreationField-CPlKyi6M.js";import{e as E}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{F as C}from"./FieldError-AQx_Co0q.js";import"./index-nuYtCEEu.js";import"./dynamic-V8J33Kah.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./clsx-B-dksMZM.js";import"./index-D5h5WobT.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./context-BymCJUNL.js";import"./browser-CktdIn7a.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D_Hg-3H4.js";import"./utils-CdCPWCHO.js";import"./Hidden-c61kZDYL.js";import"./IconWarning-D8COeLpG.js";import"./Text-_hc15B6K.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./LoadingSpinner-CEYsHom-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./ContextMenuSection-ZyWidMUH.js";import"./Dialog-CTkyeFiO.js";import"./RSPContexts-BtdGc8q9.js";import"./OverlayArrow-Dp6PlRHE.js";import"./useControlledState-TEYDAVm8.js";import"./Collection-DEfh8kkF.js";import"./CollectionBuilder-D9BuGY1P.js";import"./SelectionIndicator-BnroM9vv.js";import"./Separator-BIV1anzw.js";import"./SelectionManager-DeoXhPYy.js";import"./useEvent-BWXlYds5.js";import"./useCollator-B9ukcsEW.js";import"./FocusScope-DELlCJxb.js";import"./VisuallyHidden-rd1eTAwo.js";import"./getActionGroupSlot-DtqoduiB.js";import"./useStatic-CIMbf_kn.js";import"./context-B5Yt5ZbD.js";import"./FieldDescription-mxWByT_L.js";import"./Tooltip-bUCdMTsN.js";import"./ClearPropsContextView-BeRr4MLk.js";import"./ClearPropsContext-CD4xLCoc.js";import"./ReactAriaControlledValueFix-CUbxH7dl.js";import"./ContextualHelpTrigger-bjuY7Tuo.js";import"./Popover-DSb6ue0f.js";import"./OverlayContextProvider-Cx4xwIBd.js";import"./OverlayTrigger-CTujVhSf.js";import"./ControlledNotification-CL-0TnDq.js";import"./Heading-BZf-WkCq.js";import"./Heading-C-OseSB1.js";import"./useManagedValue-PY6rKwSS.js";import"./useFieldComponent-Cyrlnow6.js";import"./TextField-D6hfEfzE.js";import"./Form-CjlO_WmK.js";import"./Group-D0yjr4EW.js";import"./Input-POMMqA2k.js";import"./useTextField-0T4qffof.js";import"./useFormReset-DB-Y7LtK.js";import"./useFormValidation-Dr6xiKJA.js";const P=(e=B)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return E(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[S.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Xr={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=j();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(w,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:P()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(y,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:P(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(C,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const $r=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,$r as __namedExportsOrder,Xr as default};
