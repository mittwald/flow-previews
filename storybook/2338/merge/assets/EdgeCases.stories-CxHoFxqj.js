import{r as s,j as o}from"./iframe-CtEjVB66.js";import{M as n}from"./Modal-BLKh-L3K.js";import{B as i}from"./Button-BbnjmOHy.js";import a from"./Default.stories-DnhtOCdj.js";import{C as c}from"./Content-BV9uIs25.js";import{S as d}from"./Section-B3QlijVL.js";import{T as l}from"./Text-QCKh6xRo.js";import{A as u}from"./ActionGroup-DvmIDtHK.js";import{T as x}from"./TextField-CTAsvyVX.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{H as f}from"./Heading-c1W7e3IT.js";import{A as h}from"./ActionBatch-CDzJz977.js";import{L as z}from"./Label-CvAjEv-1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-BbkFIR2Q.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./Overlay-BGmB2cy_.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./LoadingSpinner-CJX4ksrz.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./utils-BuEQZICT.js";import"./Dialog-vhqDwDKM.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./context-DXMIHXTO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./RSPContexts-oGVR4C8S.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./Text-1qNOxJF7.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./VisuallyHidden-B96eA0GA.js";import"./ButtonView-Ci2JAKGf.js";import"./Flex-CBSP5RJa.js";import"./ModalTrigger-BT28tuEq.js";import"./OverlayTrigger-B8jwjQmG.js";import"./DialogTriggerView-DVU4ZpEK.js";import"./lib-OAtr6svn.js";import"./FormRootError-2xDo0dX3.js";import"./ActionGroupView-zAOXf7RN.js";import"./useRef-C8PAeYAN.js";import"./browser-CLHYf5YF.js";import"./FieldError-BzQCv4a3.js";import"./FieldError-DJZxrTcD.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";import"./ColumnLayout-BJbm5gyv.js";import"./AccentBox-D8NrSGb7.js";import"./Radio-Cf7S8em0.js";import"./useFieldComponent-B7HNchXP.js";import"./useMakeFocusable-DWHyWnej.js";import"./RadioGroup-B5QMnPSu.js";import"./Form-Bs4UrYBw.js";import"./useFormValidation-ClIfwgLl.js";import"./useFormReset-2RZyXaKm.js";import"./RadioButton-C2pUvF8A.js";import"./DatePicker-DNmHKNJD.js";import"./DateInput--vlyF4Vw.js";import"./Group-BKGRpIrc.js";import"./Input-ByYkDHMz.js";import"./useSpinButton-D2elMItD.js";import"./useFilter-CK_wnS0C.js";import"./Popover-fmzRw_jU.js";import"./RangeCalendar-lp_arQA9.js";import"./Heading-DMz3CQ7g.js";import"./useUpdateEffect-CXUPSqJb.js";import"./FieldDescription-DOW1EL7Z.js";import"./index-Eti83Dn-.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./TextField-uAKnHDmd.js";import"./useTextField-7MsF6vto.js";import"./Label.module-CUYTf9Jc.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./ContextMenuSection-COxyh1Te.js";const at={...a,title:"Overlays/Modal/Edge Cases"},r={render:p=>{const[t,e]=s.useState("s");return o.jsxs(n,{...p,size:t,offCanvas:!0,isDefaultOpen:!0,children:[o.jsx(f,{children:m.short}),o.jsx(c,{children:o.jsxs(d,{children:[t==="s"&&o.jsx(l,{children:m.long}),t==="m"&&o.jsx(x,{children:o.jsx(z,{children:m.short})}),o.jsx(i,{onPress:()=>e(t==="s"?"m":"s"),children:"Change size"})]})}),o.jsx(u,{children:o.jsxs(h,{closeModal:!0,children:[o.jsx(i,{color:"accent",children:"Create customer"}),o.jsx(i,{variant:"soft",color:"secondary",children:"Abort"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [size, setSize] = useState<ModalProps["size"]>("s");
    return <Modal {...props} size={size} offCanvas isDefaultOpen>
        <Heading>{dummyText.short}</Heading>
        <Content>
          <Section>
            {size === "s" && <Text>{dummyText.long}</Text>}
            {size === "m" && <TextField>
                <Label>{dummyText.short}</Label>
              </TextField>}

            <Button onPress={() => setSize(size === "s" ? "m" : "s")}>
              Change size
            </Button>
          </Section>
        </Content>
        <ActionGroup>
          <Action closeModal>
            <Button color="accent">Create customer</Button>
            <Button variant="soft" color="secondary">
              Abort
            </Button>
          </Action>
        </ActionGroup>
      </Modal>;
  }
}`,...r.parameters?.docs?.source}}};const ct=["SizeChange"];export{r as SizeChange,ct as __namedExportsOrder,at as default};
