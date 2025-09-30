import{j as r}from"./iframe-BxDpVhRd.js";import{a as h,u as x,F as j,t as D}from"./Form-CR4vr6SN.js";import{L as e}from"./Label-CMeeurCB.js";import{B as s}from"./Button-COfabfFq.js";import{S}from"./Section-DXdLzCuH.js";import{A as R}from"./ActionGroup-DNCuAw2y.js";import{s as g}from"./Action-CQ_Tet5k.js";import{J as a,h as y,L as B}from"./DateField-DgkNJVeQ.js";import{D as o}from"./DateRangePicker-xKa3HVGJ.js";import{F as P}from"./FieldDescription-C72SkzYM.js";import"./index-Cun1SEai.js";import"./dynamic-ByIuCnCH.js";import"./PropsContextProvider-D577-dj4.js";import"./mergeRefs-Bevg5I71.js";import"./index-BnQUCq-S.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bmq-pcAK.js";import"./IconWarning-CR1PBxFk.js";import"./FieldError-BrR5GiZM.js";import"./utils-CpjREF5t.js";import"./Text-Bq0GBBEx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BeMG850z.js";import"./context-CSPhd592.js";import"./browser-DkE4SP-u.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CcH2uIQ5.js";import"./Hidden-sa0o7Y_i.js";import"./Text-HfVZjSfr.js";import"./EmulatedBoldText-Di64OaFb.js";import"./LoadingSpinner-D1vbb_I_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJ12dAAc.js";import"./ProgressBar-CjBgSU-K.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cfg_1SLq.js";import"./useFocus-DCdhMrgy.js";import"./useFocusRing-DkmhKsWm.js";import"./useFocusable-Bb-ubJOz.js";import"./ContextMenuSection-D81CeDCG.js";import"./Popover-DsSNZzMW.js";import"./DialogTriggerView-GlI_-8yJ.js";import"./context-CdLDj7bD.js";import"./useStatic-DKuo4ovu.js";import"./RSPContexts-CaPgNpVT.js";import"./ClearPropsContextView-Ff-_bWul.js";import"./useControlledState-B0hr1ZXY.js";import"./FocusScope-CQY-r9mi.js";import"./useCollator-1chl5SyN.js";import"./VisuallyHidden-DX-N6FS4.js";import"./Collection-tycL-zcz.js";import"./CollectionBuilder-DsOEphd0.js";import"./context-BRTadV_G.js";import"./Separator-CnqlmT3o.js";import"./SelectionManager-BIdKqwjQ.js";import"./useEvent-DUrYkmv0.js";import"./Switch-TSGUx7eD.js";import"./useMakeFocusable-DOqtKzac.js";import"./useToggleState-GJ2JDvNb.js";import"./useFormReset-BdOLdhs-.js";import"./getActionGroupSlot-DfO33wTs.js";import"./Form-DnVdWn9l.js";import"./Group-BMNJ9slh.js";import"./Input-CLCKEIJY.js";import"./useFormValidation-BO_UVXRs.js";import"./useSpinButton-DwlNA7wt.js";import"./useFilter-CA4hB-zz.js";import"./FormField.module-CqWyJNQI.js";import"./RangeCalendar-Vo9xWyXl.js";import"./Heading-BzGwSJzV.js";import"./useUpdateEffect-Bxlviv8S.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Kr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const Nr=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Nr as __namedExportsOrder,Kr as default};
