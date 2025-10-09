import{j as r}from"./iframe-CwjVVvSu.js";import{a as c,u as l,F as d,t as b}from"./Form-CeAg-VEU.js";import{L as h}from"./Label-CmvTTYLZ.js";import{B as t}from"./Button-BzxBG2HJ.js";import{S as y}from"./Section-CxEg7JTo.js";import{A as B}from"./ActionGroup-CtSc6WUI.js";import{s as x}from"./Action-CQ8EezpL.js";import{F as f}from"./FileField-n5kJhBa0.js";import"./index-Cun1SEai.js";import"./dynamic-BP9Yj9yh.js";import"./flowComponent-CL0EVs0o.js";import"./index-CVGQdXYt.js";import"./clsx-B-dksMZM.js";import"./index-Bxp7_DVb.js";import"./FieldError-XyqikU8N.js";import"./IconWarning-B6H6J5Pk.js";import"./FieldError-C3URs1EZ.js";import"./utils-OpG5u5ZF.js";import"./Text-lT5rhDYZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BEI6070A.js";import"./context-YbH8ssAd.js";import"./browser-DnOs_TEg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BELpmtJQ.js";import"./Hidden-BrRDJs-s.js";import"./Text-BOmlTVxc.js";import"./EmulatedBoldText-pbz3Nf-x.js";import"./LoadingSpinner-BwQDbOwS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClXMkmVB.js";import"./ProgressBar-QC1O3iDd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTJZYj-E.js";import"./useFocus-YxLRULIL.js";import"./useFocusRing-DVoBnH5y.js";import"./useFocusable-CooOyqEQ.js";import"./ContextMenuSection-BSZPjhOz.js";import"./Dialog-D6Mx5C8w.js";import"./RSPContexts-C2pkpfxa.js";import"./OverlayArrow-n3jQFhGI.js";import"./useControlledState-3R78iQB5.js";import"./Collection-cKUjot9l.js";import"./CollectionBuilder-DmI3Nmaj.js";import"./context-Boi0W4no.js";import"./Separator-DgCYxSL8.js";import"./SelectionManager-BvVPZ4Sc.js";import"./useEvent-tgNtvJjt.js";import"./useCollator-3AvnbkJz.js";import"./FocusScope-3UfsOkyw.js";import"./VisuallyHidden-DYp4WZRH.js";import"./getActionGroupSlot-D-7WMSXI.js";import"./useStatic-DG0mSv16.js";import"./context-C4fo6dak.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-Z5AW4dUj.js";import"./Input-DebxReei.js";import"./useMakeFocusable-CgSnmY1U.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=g("submit"),Lr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const o=async S=>{await x(5e3),_(S)},F=l({defaultValues:{user:""}}),j=b();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(y,{children:[r.jsx(j,{name:"user",children:r.jsxs(f,{children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(B,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},e={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsxs(f,{multiple:!0,children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};var m,n,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const qr=["Default","WithFocusAndError"];export{e as Default,i as WithFocusAndError,qr as __namedExportsOrder,Lr as default};
