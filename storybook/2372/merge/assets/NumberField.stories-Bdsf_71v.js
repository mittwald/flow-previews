import{r as x,j as r}from"./iframe-C1IdntWq.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-De-Psidt.js";import{L as o}from"./Label-Be-SvMDa.js";import{B as u}from"./Button-mSWnhOmK.js";import{S as g}from"./Section-AIy1dCAg.js";import{A as b}from"./ActionGroup-BahMWm8O.js";import{s as p}from"./ActionBatch-VQdQXkn7.js";import{N as t}from"./NumberField-DpC0hnmQ.js";import{F as E}from"./FieldDescription-CN54GY3S.js";import{F as S}from"./FieldError-DsJ8c-ZE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CUpn0zgH.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./clsx-B-dksMZM.js";import"./index-Coy6T-Pa.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./context-CuxmdylV.js";import"./ActionGroupView-U73m2CoE.js";import"./Content-BSdmmpR7.js";import"./Heading-CLkS-w3U.js";import"./Heading-BVXFLwsq.js";import"./RSPContexts-DcVP09I4.js";import"./utils-CNo0qaX0.js";import"./Text-W7h8_LNr.js";import"./browser-WXx3m9ky.js";import"./EmulatedBoldText-COIRRGWk.js";import"./Text-CkLpWhuM.js";import"./Modal-Cd8QIcZl.js";import"./useOverlayController-DbY_Tl3x.js";import"./useStatic-CDGCPgxo.js";import"./Overlay-vUOl12kW.js";import"./OverlayContextProvider-Car-oabl.js";import"./LoadingSpinner-C4dBxxC2.js";import"./IconWarning-BY-3yqWN.js";import"./remote-DdxKfasm.js";import"./Dialog-DaGSiRkj.js";import"./Button-C7cBjDhV.js";import"./ProgressBar-B94oTEu8.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CAzlzskU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIzz4kJt.js";import"./useFocus-HLQCbRtK.js";import"./useFocusRing-DQuA22ZQ.js";import"./useFocusable-Z0Y9nSjp.js";import"./OverlayArrow-DbaAbVnX.js";import"./useControlledState-FuYpKfPj.js";import"./Collection-C0olx5yt.js";import"./CollectionBuilder-ARpC-11z.js";import"./SelectionIndicator-DffOr8wA.js";import"./Separator-B7Oy5oGV.js";import"./SelectionManager-DepyWfPp.js";import"./useEvent-C_lXtwpa.js";import"./useCollator-BHhXYjcX.js";import"./FocusScope-C2GkFJYp.js";import"./VisuallyHidden-709t6SxP.js";import"./ButtonView-UjagI0v2.js";import"./Flex-DyCVhYjZ.js";import"./useRef-m9duQCt_.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Bx9t8tzE.js";import"./getActionGroupSlot-JkJsMZpG.js";import"./useFieldComponent-o_u9PYdj.js";import"./useControlledHostValueProps-B0HcYsZy.js";import"./FieldError-DgBT4dcF.js";import"./Form-CijQ_R7m.js";import"./Group-DCbRkIJ9.js";import"./Input-Des9E_um.js";import"./useFormValidation-CloSy7V5.js";import"./useSpinButton-BJ4w7gJh.js";import"./useFormReset-CaX1fgpZ.js";import"./useTextField-DDX9uSSl.js";import"./AlertText-LATyc42T.js";import"./AlertIcon-CvmjcNLC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Qr as __namedExportsOrder,Jr as default};
