import{j as r,r as j}from"./iframe-CJFOFCad.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-BkgcDrX7.js";import{L as t}from"./Label-DpG9gbVN.js";import{B as u}from"./Button-D5kumnA4.js";import{S as E}from"./Section-CCwmV9uG.js";import{A as S}from"./ActionGroup-B-ixDo6k.js";import{s as c}from"./Action-Vq-tbHvg.js";import{I as l,f as D,K as B}from"./DateInput-rXY_-ahm.js";import{D as o}from"./DatePicker-_0wZJa_3.js";import{F as g}from"./FieldError-Dc2Z54jn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfulQ7wG.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./clsx-B-dksMZM.js";import"./index-Cu9s0VFH.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./context-CMyux8LD.js";import"./useRef-B-LbwbXp.js";import"./utils-CsQ8IQtm.js";import"./ButtonView-BS0xOJCI.js";import"./browser-C8kWAWSZ.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./IconWarning-1TKJLzWG.js";import"./remote-BxHvJS68.js";import"./Text-CI7VZqhd.js";import"./EmulatedBoldText-BF5DLBnT.js";import"./Text-8vym_gVd.js";import"./LoadingSpinner-CM8bIOhN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BaNQUerH.js";import"./ProgressBar-D1JMQZ2r.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cb3KoAb3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NyliDXf7.js";import"./useFocus-Cgy8euA9.js";import"./useFocusRing-wbIo7ugc.js";import"./useFocusable-13L7602I.js";import"./ContextMenuSection-C56vs4OS.js";import"./Dialog-YkcYiA7q.js";import"./RSPContexts-CNS2UWja.js";import"./OverlayArrow-DEHMSq9h.js";import"./useControlledState-DvHOpAD3.js";import"./Collection-B9y5YoW-.js";import"./CollectionBuilder-Dz6WVvJx.js";import"./SelectionIndicator-BI4debiO.js";import"./Separator-CS0DDWqc.js";import"./SelectionManager-DYEiw_sj.js";import"./useEvent-Bx7Hxhw9.js";import"./useCollator-DYyzym3S.js";import"./FocusScope-BYRCsx--.js";import"./VisuallyHidden-CZLhXAB_.js";import"./getActionGroupSlot-MsF1cFZX.js";import"./useStatic-C0hf5llT.js";import"./context-DTASnmZz.js";import"./FieldError-B3-rgjm7.js";import"./Form-B3lCmY-S.js";import"./Group-DiioWKhA.js";import"./Input-BgsLbNjC.js";import"./useFormValidation-DcThlYcg.js";import"./useFormReset-DXleDB5s.js";import"./useSpinButton-CpTmgsGV.js";import"./useFilter-aLPTAqiV.js";import"./useFieldComponent-CVIwC-Yy.js";import"./Popover-Bd7FtJNb.js";import"./useOverlayController-BwJW5xew.js";import"./OverlayContextProvider-DL2zELSv.js";import"./RangeCalendar-C_jb1I8-.js";import"./Heading-DOJDeA1a.js";import"./useUpdateEffect-DScgK-Hw.js";import"./AlertText-BB2MdEuH.js";import"./AlertIcon-BfQxSvrI.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};
