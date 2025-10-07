import{j as r}from"./iframe-4Q3VdU3W.js";import{a as c,u as d,F as l,t as b}from"./Form-D0cPrVSZ.js";import{L as x}from"./Label-UJpqKaML.js";import{B as i}from"./Button-DtfrCWpg.js";import{S as g}from"./Section-BCaeDUwn.js";import{A as y}from"./ActionGroup-CDfjIgIF.js";import{s as h}from"./Action-BPLFS_xS.js";import{S as f}from"./Slider-C_hCki6m.js";import"./index-Cun1SEai.js";import"./dynamic-D7Z9JYdX.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./clsx-B-dksMZM.js";import"./index-PS7XpSls.js";import"./FieldError-BQ2VN50e.js";import"./IconWarning-C7969b2c.js";import"./FieldError-Bmwt53NP.js";import"./utils-BDqSegOF.js";import"./Text-CbQs5VbJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./context-Ctn7vzaA.js";import"./browser-BefUj7Q1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./Text-Dj8BftP4.js";import"./EmulatedBoldText-VlnzXvNR.js";import"./LoadingSpinner-DB05D1_y.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CVw6sY0j.js";import"./ProgressBar-DDVhQ4Au.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gN-0t-oA.js";import"./useFocus-B23mYmqe.js";import"./useFocusRing-JPznIV6A.js";import"./useFocusable-xMViE0rI.js";import"./ContextMenuSection-DHdrwNVp.js";import"./Dialog-eTJli1DK.js";import"./RSPContexts-BraqArs8.js";import"./OverlayArrow-C0bCojbN.js";import"./useControlledState-DDubLIo_.js";import"./Collection-BcdTAldV.js";import"./CollectionBuilder-Djb2_WqG.js";import"./context-Crr8Yx7q.js";import"./Separator-V229l451.js";import"./SelectionManager-DSIHg9Rl.js";import"./useEvent-X_MmbY8S.js";import"./useCollator-DKF-AEK0.js";import"./FocusScope-CdBaHhXi.js";import"./VisuallyHidden-Bs3ruDlE.js";import"./getActionGroupSlot-DbevwPeS.js";import"./useStatic-J4yhNwyX.js";import"./context-HST9WQNh.js";import"./useMakeFocusable-yVzA5tdL.js";import"./useFormReset-DJaP_Vl0.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,O=B("submit"),Ar={title:"Integrations/React Hook Form/Slider",component:c,render:()=>{const t=async j=>{await h(1500),O(j)},S=d({defaultValues:{storage:50}}),F=b();return r.jsx(l,{form:S,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(F,{name:"storage",children:r.jsx(f,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(x,{children:"Storage"})})}),r.jsx(y,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(x,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var m,s,n;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
