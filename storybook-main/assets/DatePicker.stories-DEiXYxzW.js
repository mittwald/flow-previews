import{j as r,r as j}from"./iframe-D6IogGzN.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-DlmbUMlC.js";import{L as t}from"./Label-CevfIrA7.js";import{B as u}from"./Button-4bsuig8G.js";import{S as E}from"./Section-DSqhsCqF.js";import{A as S}from"./ActionGroup-CyINFblz.js";import{s as c}from"./Action-CdCNq_o6.js";import{I as l,f as D,K as B}from"./DateInput-yq-J4L3A.js";import{D as o}from"./DatePicker-CQ6rGVy1.js";import{F as g}from"./FieldError-s9c2Hgmm.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DOTSgjbA.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./clsx-B-dksMZM.js";import"./index-D5OmXbhN.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./context-D_0iO3JE.js";import"./useRef-DAuBIB6m.js";import"./utils-DGVDGTqS.js";import"./ButtonView-DebfDMTY.js";import"./browser-JB3DJ3rF.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./IconWarning-CDNOZZaQ.js";import"./remote-ByQLcsaA.js";import"./Text-DVEzKGc_.js";import"./EmulatedBoldText-DAiBlkMb.js";import"./Text-CSz0hkcR.js";import"./LoadingSpinner-BmFbjzPt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjufwbKz.js";import"./ProgressBar-DqM5emHd.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--9PNzusi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-OPUq1uX5.js";import"./useFocus-JSiA5HpL.js";import"./useFocusRing-DeVFSene.js";import"./useFocusable-CqeTIxtx.js";import"./ContextMenuSection-DtXi0ARF.js";import"./Dialog-SQEPLKiU.js";import"./RSPContexts-Y8HBeOxz.js";import"./OverlayArrow-AHInXUcQ.js";import"./useControlledState-DoPmGGFu.js";import"./Collection-C7w1JPu7.js";import"./CollectionBuilder-BDnI44sl.js";import"./SelectionIndicator-C7krvdos.js";import"./Separator-BIJp8TvF.js";import"./SelectionManager-Twu4QIIp.js";import"./useEvent-BDe--WZk.js";import"./useCollator-st5xggxp.js";import"./FocusScope-DPcfzn1G.js";import"./VisuallyHidden-CtfXU_Om.js";import"./getActionGroupSlot-Ba25QpN_.js";import"./useStatic-BI3MLON7.js";import"./context-C3OW4m7r.js";import"./FieldError-CQOrVEPx.js";import"./Form-DHrkWV8M.js";import"./Group-CgQOg1YP.js";import"./Input-DZPKJfFh.js";import"./useFormValidation-CGjfwGDf.js";import"./useFormReset-zYUel0fa.js";import"./useSpinButton-5Onsgxe1.js";import"./useFilter-Bh3-JBZk.js";import"./useFieldComponent-DWOteHG6.js";import"./Popover-Bko44XEP.js";import"./useOverlayController-wzkI43Df.js";import"./OverlayContextProvider-V3LFD1Iu.js";import"./RangeCalendar-CMxaOF4j.js";import"./Heading-BP-CAVCT.js";import"./useUpdateEffect-CnWNJNMu.js";import"./AlertText-u5jFPjew.js";import"./AlertIcon-BzliTC0_.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
