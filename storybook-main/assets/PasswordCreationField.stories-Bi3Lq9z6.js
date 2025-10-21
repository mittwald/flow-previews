import{r as b,j as r}from"./iframe-DALqHAyB.js";import{a as c,u as f,F as h,t as w}from"./Form-DWtgofJo.js";import{L as i}from"./Label-DyIG2v27.js";import{B as o}from"./Button-BbfkfOCO.js";import{S as P}from"./Section-DauTDmMy.js";import{A as j}from"./ActionGroup-BmRr98fb.js";import{s as F}from"./Action-yEvGmIpX.js";import{d as y,O as g,P as n,n as t,r as B}from"./PasswordCreationField-DTE5wlSO.js";import{e as S}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{F as E}from"./useFieldComponent-CuLkv2Wr.js";import"./index-nuYtCEEu.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./clsx-B-dksMZM.js";import"./index-CPatoSxs.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./context-aw0dYPtu.js";import"./browser-pVqjrops.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D28Pduqa.js";import"./utils-C0MA_VWy.js";import"./Hidden-SLgE1qP8.js";import"./IconWarning-CcDUp5xj.js";import"./Text-BxJmp77a.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Text-vTixOjUz.js";import"./LoadingSpinner-K4oR_LJz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B6bWdLOu.js";import"./ProgressBar-udFHgrmU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-85XHUWXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-RYFgUS1k.js";import"./useFocus-CR3niFsF.js";import"./useFocusRing-BpmoLA66.js";import"./useFocusable-UlymAToY.js";import"./ContextMenuSection-BiaSnVoU.js";import"./Dialog-bs1AaCOv.js";import"./RSPContexts-CoCveTu3.js";import"./OverlayArrow-CD30hPjT.js";import"./useControlledState-BAMCZ0BN.js";import"./Collection-BvojxhPL.js";import"./CollectionBuilder-l42sx1Ra.js";import"./SelectionIndicator-D4RzQj7G.js";import"./Separator-BdsMzjh6.js";import"./SelectionManager-DM5ASuX4.js";import"./useEvent-D9fHmb7e.js";import"./useCollator-Do-67ZwH.js";import"./FocusScope-7BxeDCH7.js";import"./VisuallyHidden-BkwE9NAp.js";import"./dynamic-aVFvjRkA.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./useStatic-WJbJZsQS.js";import"./context-CWEo3fLe.js";import"./Group-Co0gZnxS.js";import"./Input-D7GaT3Mp.js";import"./TextField-CjKAtJ6I.js";import"./Form-DuNFHANS.js";import"./useTextField-Di0sHcGC.js";import"./useFormReset-C8DxwuW7.js";import"./useFormValidation-C14rVgab.js";import"./FieldDescription-DA7yQQcX.js";import"./Tooltip-DftF3NMd.js";import"./ClearPropsContextView-BSXhUQ8g.js";import"./ClearPropsContext-frWmeUQW.js";import"./ReactAriaControlledValueFix-BUPP8sB2.js";import"./ContextualHelpTrigger-CCAqSKXi.js";import"./Popover-CrnBVe2l.js";import"./useOverlayController-DLM_LHaF.js";import"./OverlayContextProvider-DuttmE5t.js";import"./OverlayTrigger-DCsddSuz.js";import"./ControlledNotification-CAzCaSM8.js";import"./Heading-lDiFG-iI.js";import"./Heading-BEFcq9oy.js";import"./useManagedValue-CMn6PGpE.js";import"./react-children-utilities-C1NF1MDP.js";const C=(e=y)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[B.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:"Jo dwag a password is required!"},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(j,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:C(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
