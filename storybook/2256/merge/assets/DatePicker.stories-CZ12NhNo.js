import{j as r,r as j}from"./iframe-ICCBaEZ0.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-DHM0HwV0.js";import{L as t}from"./Label-CdS4JTo9.js";import{B as u}from"./Button-BPUjkcWl.js";import{S as E}from"./Section-f7ELsjIS.js";import{A as S}from"./ActionGroup-Cyu4G9Rw.js";import{s as c}from"./Action-BI-eqtgf.js";import{I as l,f as D,K as B}from"./DateInput-xmP4VpAw.js";import{D as o}from"./DatePicker-B2QV829H.js";import{F as g}from"./FieldError-CXiPiawI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4nz3o_q.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./clsx-B-dksMZM.js";import"./index-Dbcsq1pl.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./context-BA_6GkxW.js";import"./useRef-CiWut0dQ.js";import"./utils-Bdyed02U.js";import"./ButtonView-BszEJvVk.js";import"./browser-BXZux_wF.js";import"./Label.module-CUYTf9Jc.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./Text-wotACWdr.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./Text-6VRpzXYD.js";import"./LoadingSpinner-DZTaEi_R.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CEB885Bq.js";import"./ProgressBar-DNR75UAD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./ContextMenuSection-CUOZwZ8m.js";import"./Dialog-YdLNLYvV.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./useControlledState-0-xiytms.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./VisuallyHidden-CIUq3upT.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./useStatic-EBffme0U.js";import"./context-CFn3lEGQ.js";import"./FieldError-Uso8nKHu.js";import"./Form-Dqb0_Mn-.js";import"./Group-Kcal-yRn.js";import"./Input-CQyHZiU6.js";import"./useFormValidation-BK0HiA-u.js";import"./useFormReset-mc9YwuWr.js";import"./useSpinButton-DTXOxlbQ.js";import"./useFilter-CD8-Qf9b.js";import"./useFieldComponent-C2gLyH5u.js";import"./Popover-BznUFd8V.js";import"./useOverlayController-CTkEh9O7.js";import"./OverlayContextProvider-DutSGNyV.js";import"./RangeCalendar-DgjMShim.js";import"./Heading-BmRm-FE-.js";import"./useUpdateEffect-WCykUgVB.js";import"./AlertText-CQRiaMTC.js";import"./AlertIcon-DVbl3jDT.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
