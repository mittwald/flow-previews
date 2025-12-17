import{j as r,r as g}from"./iframe-D8Xbwx9P.js";import{u as d,F as p}from"./Form-BKjzG_tJ.js";import{L as t}from"./Label-DAN_V0xJ.js";import{F as c,t as D}from"./Field-BWhdEMQM.js";import{B as u}from"./Button-DnjfJoF3.js";import{S as b}from"./Section--74qKuLo.js";import{A as S}from"./ActionGroup-DOap5xNu.js";import{s as l}from"./Action-Dmcwzy-D.js";import{a as f,$ as R,b as E}from"./DateInput-Bwf5FNjq.js";import{F as m}from"./FieldDescription-DheAaCsD.js";import{F as B}from"./FieldError-SqDTuGjU.js";import{D as o}from"./DateRangePicker-Czl62hdf.js";import{R as F}from"./ResetButton-BhCUvUAd.js";import{S as h}from"./SubmitButton-D7ICDBM3.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BEcu8ny4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CigogB48.js";import"./index-CYTinXvO.js";import"./index-BkN34slO.js";import"./useLocalizedStringFormatter-CXsD6kYA.js";import"./context-CMvcEg-k.js";import"./Label-rFd_FIkn.js";import"./utils-C3Tuzz6i.js";import"./Hidden-zhCtJ-LB.js";import"./dynamic-C7V4-Zrv.js";import"./IconApp-Ch7b1vIu.js";import"./remote-BpFUxGPl.js";import"./IconX-HMFf4w5l.js";import"./IconCheck-Djd4ZBy_.js";import"./Text-ZHIm2izM.js";import"./EmulatedBoldText-Cd0UPmPK.js";import"./Text-C0Eqp9FN.js";import"./LoadingSpinner-CRZU7QZf.js";import"./ariaLive-CRfqyPSL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-WVOu4VhQ.js";import"./ProgressBar-CVumlVqB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DE67nUnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CvIVggVb.js";import"./useFocus-D1eNONK1.js";import"./useFocusRing-kQK9kbZa.js";import"./useFocusable-CozNvSU7.js";import"./ContextMenuSection-Dzw50vnG.js";import"./lib-90ocxLs-.js";import"./Dialog-Du_kPH7o.js";import"./RSPContexts-CsOhl7yw.js";import"./OverlayArrow-CaVIvu7y.js";import"./useControlledState-YZIEyxRh.js";import"./Collection-CquzgsCv.js";import"./CollectionBuilder-Cl1VQ76h.js";import"./SelectionIndicator-DvsfeWbh.js";import"./Separator-0bv_QzU7.js";import"./SelectionManager-CxpfoWMp.js";import"./useEvent-BrS2p23g.js";import"./useCollator-CoCLyJRC.js";import"./FocusScope-_ezdgzai.js";import"./VisuallyHidden-0JTBVxma.js";import"./getActionGroupSlot-cjlWHciT.js";import"./useStatic-76h0-2Qu.js";import"./context-DTPirBdX.js";import"./FieldError-BOU-ptKT.js";import"./Form-BSjJ02XH.js";import"./Group-K-eCqnjR.js";import"./Input-CwYJ6Hjz.js";import"./useFormValidation-Bi2FjDm7.js";import"./useFormReset-7Q0iJ7bt.js";import"./useSpinButton-BYb2IFbL.js";import"./useFilter-CBlxW_eJ.js";import"./IconDanger-DO15Hi94.js";import"./Popover-D00PjseW.js";import"./OverlayContextProvider-C9wat-C-.js";import"./useOverlayController-DFfxBH9t.js";import"./CalendarHeader-Cz4dQwrU.js";import"./useUpdateEffect-B9NUBV0m.js";import"./IconChevronRight-DQNEVF5g.js";import"./Heading-B1sGhKQ8.js";import"./useFieldComponent-BVJ72uhW.js";import"./useRef-COaHDyfp.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),oe={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const e=async j=>{await l(1500),y(j)},x=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:R(E()),children:r.jsx(t,{children:"Future date range"})})}),r.jsxs(S,{children:[r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},n={},s={render:()=>{const e=d({defaultValues:{field:""}});return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(p,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <DateRangePicker isInvalid>
          <Label>Future Date</Label>
          <FieldDescription>Select a future date</FieldDescription>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DateRangePicker>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
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
}`,...a.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,ie as __namedExportsOrder,oe as default};
