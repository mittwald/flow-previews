import{j as r}from"./iframe-CwjVVvSu.js";import{a as c,u as d,F as l,t as b}from"./Form-CeAg-VEU.js";import{L as x}from"./Label-CmvTTYLZ.js";import{B as i}from"./Button-BzxBG2HJ.js";import{S as g}from"./Section-CxEg7JTo.js";import{A as y}from"./ActionGroup-CtSc6WUI.js";import{s as h}from"./Action-CQ8EezpL.js";import{S as f}from"./Slider-CHuSJW4W.js";import"./index-Cun1SEai.js";import"./dynamic-BP9Yj9yh.js";import"./flowComponent-CL0EVs0o.js";import"./index-CVGQdXYt.js";import"./clsx-B-dksMZM.js";import"./index-Bxp7_DVb.js";import"./FieldError-XyqikU8N.js";import"./IconWarning-B6H6J5Pk.js";import"./FieldError-C3URs1EZ.js";import"./utils-OpG5u5ZF.js";import"./Text-lT5rhDYZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BEI6070A.js";import"./context-YbH8ssAd.js";import"./browser-DnOs_TEg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BELpmtJQ.js";import"./Hidden-BrRDJs-s.js";import"./Text-BOmlTVxc.js";import"./EmulatedBoldText-pbz3Nf-x.js";import"./LoadingSpinner-BwQDbOwS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClXMkmVB.js";import"./ProgressBar-QC1O3iDd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTJZYj-E.js";import"./useFocus-YxLRULIL.js";import"./useFocusRing-DVoBnH5y.js";import"./useFocusable-CooOyqEQ.js";import"./ContextMenuSection-BSZPjhOz.js";import"./Dialog-D6Mx5C8w.js";import"./RSPContexts-C2pkpfxa.js";import"./OverlayArrow-n3jQFhGI.js";import"./useControlledState-3R78iQB5.js";import"./Collection-cKUjot9l.js";import"./CollectionBuilder-DmI3Nmaj.js";import"./context-Boi0W4no.js";import"./Separator-DgCYxSL8.js";import"./SelectionManager-BvVPZ4Sc.js";import"./useEvent-tgNtvJjt.js";import"./useCollator-3AvnbkJz.js";import"./FocusScope-3UfsOkyw.js";import"./VisuallyHidden-DYp4WZRH.js";import"./getActionGroupSlot-D-7WMSXI.js";import"./useStatic-DG0mSv16.js";import"./context-C4fo6dak.js";import"./useMakeFocusable-CgSnmY1U.js";import"./useFormReset-BtU7PEqW.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,O=B("submit"),Ar={title:"Integrations/React Hook Form/Slider",component:c,render:()=>{const t=async j=>{await h(1500),O(j)},S=d({defaultValues:{storage:50}}),F=b();return r.jsx(l,{form:S,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(F,{name:"storage",children:r.jsx(f,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(x,{children:"Storage"})})}),r.jsx(y,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(x,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var m,s,n;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Slider>
            <Label>Text</Label>
          </Slider>
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
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const Lr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,Lr as __namedExportsOrder,Ar as default};
