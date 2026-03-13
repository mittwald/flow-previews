import{r as d,j as r}from"./iframe-CtEjVB66.js";import{R as e}from"./Rating-BvdDRWzJ.js";import{L as m}from"./Label-CvAjEv-1.js";import{F as u}from"./FieldError-BzQCv4a3.js";import{u as c,F as g,t as f}from"./FormRootError-2xDo0dX3.js";import{B as R}from"./Button-BbnjmOHy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-1CkAUSYF.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./remote-4O72-jdB.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./RadioGroup-B5QMnPSu.js";import"./utils-BuEQZICT.js";import"./FieldError-DJZxrTcD.js";import"./Text-1qNOxJF7.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bs4UrYBw.js";import"./useLabel-Cn5QMcKF.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./useFormValidation-ClIfwgLl.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useControlledState-D0kLTbtR.js";import"./FocusScope-SeuSo2RO.js";import"./useFormReset-2RZyXaKm.js";import"./usePress-Cre2k4PJ.js";import"./useFocusable-CocGrzXD.js";import"./VisuallyHidden-B96eA0GA.js";import"./useFieldComponent-B7HNchXP.js";import"./useMakeFocusable-DWHyWnej.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";import"./dynamic-BbkFIR2Q.js";import"./ActionGroupView-zAOXf7RN.js";import"./Content-BV9uIs25.js";import"./Heading-c1W7e3IT.js";import"./Heading-DMz3CQ7g.js";import"./RSPContexts-oGVR4C8S.js";import"./Text-QCKh6xRo.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./ActionGroup-DvmIDtHK.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./useStatic-DVJZwH2g.js";import"./Modal-BLKh-L3K.js";import"./useOverlayController-BctbVInN.js";import"./Overlay-BGmB2cy_.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./LoadingSpinner-CJX4ksrz.js";import"./Dialog-vhqDwDKM.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-CZCYW2ow.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./Separator-DZN-n_nE.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./ActionBatch-CDzJz977.js";import"./ButtonView-Ci2JAKGf.js";import"./Flex-CBSP5RJa.js";import"./useRef-C8PAeYAN.js";const Or={title:"Form Controls/Rating",component:e,args:{size:"m",isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{size:{control:"inline-radio",options:["s","m"]}},render:t=>r.jsx(e,{"aria-label":"Rating",defaultValue:2,...t,children:r.jsx(m,{children:"Rating"})})},o={},i={render:t=>r.jsxs(e,{...t,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(m,{children:"Rating"}),r.jsx(u,{children:"Please rate"})]})},a={render:t=>{const[s,p]=d.useState(4);return r.jsx(e,{...t,value:s,onChange:l=>p(parseInt(l)),children:r.jsx(m,{children:"Rating"})})}},n={render:()=>{const t=c({defaultValues:{rating:2}}),s=f();return r.jsxs(g,{form:t,onSubmit:async p=>console.log(p.rating),children:[r.jsx(s,{name:"rating",children:r.jsx(e,{children:r.jsx(m,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(R,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      rating: number;
    }>({
      defaultValues: {
        rating: 2
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={async v => console.log(v.rating)}>
        <Field name="rating">
          <Rating>
            <Label>Rating</Label>
          </Rating>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithControlledValue","WithForm"];export{o as Default,a as WithControlledValue,i as WithFieldError,n as WithForm,Pr as __namedExportsOrder,Or as default};
