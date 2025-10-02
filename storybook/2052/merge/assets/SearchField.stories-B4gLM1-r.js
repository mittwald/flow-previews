import{j as r}from"./iframe-hiH37hms.js";import{a as c,u as d,F as l,t as b}from"./Form-Dyo8yiYK.js";import{L as h}from"./Label-DzM9UWDP.js";import{B as i}from"./Button-BrzTi3gr.js";import{S as g}from"./Section-B8yRiADO.js";import{A as y}from"./ActionGroup-CmCahmkF.js";import{s as x}from"./Action-BsGu1LRs.js";import{S as f}from"./SearchField-Btbt0mKB.js";import"./index-Cun1SEai.js";import"./dynamic-BmCJXizF.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./clsx-B-dksMZM.js";import"./index-BJu77HCL.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./context-DRH00eGt.js";import"./browser-BuBe5AKm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C0jnYKOc.js";import"./utils-JHWv327y.js";import"./Hidden-XcASwwlw.js";import"./IconWarning-Cse0Xf0Q.js";import"./Text-CsOmTVyE.js";import"./EmulatedBoldText-BNkr3bPM.js";import"./Text-UKwjxOKq.js";import"./LoadingSpinner-DMdJqtIF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSe0nnji.js";import"./ProgressBar-CDjSE3x2.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhsWghka.js";import"./useFocus-B9-o-MIg.js";import"./useFocusRing-WUR2BD9e.js";import"./useFocusable-C2_7lwWJ.js";import"./ContextMenuSection-Co8KQTmA.js";import"./Dialog-i0N_hzHI.js";import"./RSPContexts-DTJHlpNa.js";import"./OverlayArrow-CEJUr9iX.js";import"./useControlledState-BFPCb-Qt.js";import"./Collection-BgRsBBN2.js";import"./CollectionBuilder-DEp0jGGn.js";import"./context-BuwG6neX.js";import"./Separator-DghpaL2h.js";import"./SelectionManager-CSTWFJsn.js";import"./useEvent-CS-uDTBx.js";import"./useCollator-5PyA7SnE.js";import"./FocusScope-C5smDGs3.js";import"./VisuallyHidden-C5VBpvXq.js";import"./getActionGroupSlot-BVQ8sE7Q.js";import"./useStatic-8hqO5zoY.js";import"./context-riC63IcS.js";import"./FormField.module-CapR5K3V.js";import"./FieldError-BChewV0h.js";import"./react-children-utilities-CYBZOoJV.js";import"./ReactAriaControlledValueFix-BfvPjJZR.js";import"./Form-stGXRgys.js";import"./Group-BAo_3ehk.js";import"./Input-DYBCaGaK.js";import"./useTextField-Gz5Lvra1.js";import"./useFormReset-BDeOlo8n.js";import"./useFormValidation-DybUzXH7.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),vr={title:"Integrations/React Hook Form/SearchField",component:c,render:()=>{const t=async j=>{await x(5e3),_(j)},F=d({defaultValues:{user:""}}),S=b();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(S,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Suche"})})}),r.jsx(y,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Role"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var m,s,n;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <SearchField>
            <Label>Role</Label>
          </SearchField>
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
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const Ir=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,Ir as __namedExportsOrder,vr as default};
