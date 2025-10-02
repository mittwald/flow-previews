import{j as r,r as g}from"./iframe-hiH37hms.js";import{a as p,u as d,F as c,t as B}from"./Form-Dyo8yiYK.js";import{L as o}from"./Label-DzM9UWDP.js";import{B as n}from"./Button-BrzTi3gr.js";import{S as L}from"./Section-B8yRiADO.js";import{A as O}from"./ActionGroup-CmCahmkF.js";import{s as l}from"./Action-BsGu1LRs.js";import{M as _}from"./DateField-B-QfXD27.js";import{T as t}from"./TimeField-eUoHI5uR.js";import{F as q}from"./FieldError-BChewV0h.js";import"./index-Cun1SEai.js";import"./dynamic-BmCJXizF.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./clsx-B-dksMZM.js";import"./index-BJu77HCL.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./context-DRH00eGt.js";import"./browser-BuBe5AKm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C0jnYKOc.js";import"./utils-JHWv327y.js";import"./Hidden-XcASwwlw.js";import"./IconWarning-Cse0Xf0Q.js";import"./Text-CsOmTVyE.js";import"./EmulatedBoldText-BNkr3bPM.js";import"./Text-UKwjxOKq.js";import"./LoadingSpinner-DMdJqtIF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSe0nnji.js";import"./ProgressBar-CDjSE3x2.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhsWghka.js";import"./useFocus-B9-o-MIg.js";import"./useFocusRing-WUR2BD9e.js";import"./useFocusable-C2_7lwWJ.js";import"./ContextMenuSection-Co8KQTmA.js";import"./Dialog-i0N_hzHI.js";import"./RSPContexts-DTJHlpNa.js";import"./OverlayArrow-CEJUr9iX.js";import"./useControlledState-BFPCb-Qt.js";import"./Collection-BgRsBBN2.js";import"./CollectionBuilder-DEp0jGGn.js";import"./context-BuwG6neX.js";import"./Separator-DghpaL2h.js";import"./SelectionManager-CSTWFJsn.js";import"./useEvent-CS-uDTBx.js";import"./useCollator-5PyA7SnE.js";import"./FocusScope-C5smDGs3.js";import"./VisuallyHidden-C5VBpvXq.js";import"./getActionGroupSlot-BVQ8sE7Q.js";import"./useStatic-8hqO5zoY.js";import"./context-riC63IcS.js";import"./FormField.module-CapR5K3V.js";import"./Form-stGXRgys.js";import"./Group-BAo_3ehk.js";import"./Input-DYBCaGaK.js";import"./useFormValidation-DybUzXH7.js";import"./useFormReset-BDeOlo8n.js";import"./useSpinButton-DNuglJAN.js";import"./useFilter-BCPz-iN5.js";import"./useMakeFocusable-CTKbAYTu.js";import"./useFieldComponent-CPFfLOL8.js";import"./react-children-utilities-CYBZOoJV.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,D=w("submit"),Hr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async y=>{await l(1500),D(y)},S=d({defaultValues:{timeDefaultValue:new _(16,0)}}),a=B();return r.jsx(c,{form:S,onSubmit:e,children:r.jsxs(L,{children:[r.jsx(a,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(a,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(a,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(O,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},i={},m={render:()=>{const e=d();return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(q,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=d();return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var u,F,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(F=i.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var h,x,j;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...(j=(x=m.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var b,E,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
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
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Kr as __namedExportsOrder,Hr as default};
