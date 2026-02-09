import{j as r,r as F}from"./iframe-D6IogGzN.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-DlmbUMlC.js";import{L as o}from"./Label-CevfIrA7.js";import{B as c}from"./Button-4bsuig8G.js";import{S as g}from"./Section-DSqhsCqF.js";import{A as b}from"./ActionGroup-CyINFblz.js";import{s as u}from"./Action-CdCNq_o6.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-Ik6Wm8jZ.js";import{F as S}from"./FieldError-s9c2Hgmm.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DOTSgjbA.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./clsx-B-dksMZM.js";import"./index-D5OmXbhN.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./context-D_0iO3JE.js";import"./useRef-DAuBIB6m.js";import"./utils-DGVDGTqS.js";import"./ButtonView-DebfDMTY.js";import"./browser-JB3DJ3rF.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./IconWarning-CDNOZZaQ.js";import"./remote-ByQLcsaA.js";import"./Text-DVEzKGc_.js";import"./EmulatedBoldText-DAiBlkMb.js";import"./Text-CSz0hkcR.js";import"./LoadingSpinner-BmFbjzPt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjufwbKz.js";import"./ProgressBar-DqM5emHd.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--9PNzusi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-OPUq1uX5.js";import"./useFocus-JSiA5HpL.js";import"./useFocusRing-DeVFSene.js";import"./useFocusable-CqeTIxtx.js";import"./ContextMenuSection-DtXi0ARF.js";import"./Dialog-SQEPLKiU.js";import"./RSPContexts-Y8HBeOxz.js";import"./OverlayArrow-AHInXUcQ.js";import"./useControlledState-DoPmGGFu.js";import"./Collection-C7w1JPu7.js";import"./CollectionBuilder-BDnI44sl.js";import"./SelectionIndicator-C7krvdos.js";import"./Separator-BIJp8TvF.js";import"./SelectionManager-Twu4QIIp.js";import"./useEvent-BDe--WZk.js";import"./useCollator-st5xggxp.js";import"./FocusScope-DPcfzn1G.js";import"./VisuallyHidden-CtfXU_Om.js";import"./getActionGroupSlot-Ba25QpN_.js";import"./useStatic-BI3MLON7.js";import"./context-C3OW4m7r.js";import"./useFieldComponent-DWOteHG6.js";import"./useControlledHostValueProps-C7phVJY7.js";import"./FieldDescription-CHk77VTi.js";import"./TextField-ByX6MQQi.js";import"./FieldError-CQOrVEPx.js";import"./Form-DHrkWV8M.js";import"./Group-CgQOg1YP.js";import"./Input-DZPKJfFh.js";import"./useTextField-Dmh39Twp.js";import"./useFormReset-zYUel0fa.js";import"./useFormValidation-CGjfwGDf.js";import"./AlertText-u5jFPjew.js";import"./AlertIcon-BzliTC0_.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Hr as __namedExportsOrder,Gr as default};
