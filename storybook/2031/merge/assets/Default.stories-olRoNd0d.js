import{j as r}from"./iframe-DE_VUmzH.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-Lvj7TBfh.js";import{L as m}from"./Link-Duww5_-w.js";import{H as s}from"./HeaderNavigation-Cfwyo8EE.js";import{B as o}from"./Button-DbOovzUR.js";import{T as p}from"./Text-CuCsgm5W.js";import{I as B}from"./Image-DDRkjIrr.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-B24LoSSy.js";import{C as y,M as c}from"./MenuItem-Ds4To5DG.js";import{C as A}from"./ContextMenuTrigger-C7UmgfZh.js";import"./ContextMenuSection-CJDCObRd.js";import{a as D,M as E}from"./Modal-CvdodAQD.js";import{H as G}from"./Heading-BHZJpH19.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-VgVMv0eN.js";import"./index-DsYeEkNB.js";import"./index-C0xI9_WX.js";import"./useLocalizedStringFormatter-CetpI1LZ.js";import"./context-Ki1OMBAj.js";import"./utils-D3dUv10b.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CUyQx-Vz.js";import"./useFocus-DNFgJiAK.js";import"./useFocusRing-Cc9ULfoH.js";import"./useFocusable-DpHFaro7.js";import"./dynamic-LCnuwqI9.js";import"./LoadingSpinner-cO76IOgL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BBiOSwoI.js";import"./ProgressBar-Byi_x-zn.js";import"./Label-C28iUhCz.js";import"./Hidden-NzD2YlQI.js";import"./useLabel-C4uXeX2F.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BDXGgXpt.js";import"./EmulatedBoldText-RoWFJZi8.js";import"./Text-BVPFWEoO.js";import"./AlertIcon-BoKbx114.js";import"./Action-D0USOjD9.js";import"./context-CuPWpeXC.js";import"./useStatic-DLzms8z8.js";import"./getActionGroupSlot-_T8J6cWZ.js";import"./Popover-DymngT_R.js";import"./useOverlayController-C91c4FEW.js";import"./OverlayContextProvider-li4-LjZP.js";import"./Dialog-BNbjTQaX.js";import"./RSPContexts-C9-aSZWC.js";import"./OverlayArrow-DyFt8UKI.js";import"./useControlledState-Bb_Q1JoV.js";import"./Collection-DYVSusLB.js";import"./CollectionBuilder-OxR4IyWH.js";import"./context-COqjh3TT.js";import"./Separator-DKoX_8iu.js";import"./SelectionManager-CXLB6fpE.js";import"./useEvent-YlDniR0o.js";import"./useCollator-BsMiccdt.js";import"./FocusScope-BTm6JbhF.js";import"./VisuallyHidden-B4hxOAM_.js";import"./ClearPropsContextView-BQR3XZFs.js";import"./Switch-DaSdaAHb.js";import"./Label-C_7a3H9g.js";import"./useToggleState-Dx6lhTqH.js";import"./useFormReset-C704hud4.js";import"./OverlayTrigger-B-CgEOd1.js";import"./ControlledNotification-BeYmb5Aq.js";import"./DialogTriggerView-CpHlyDRm.js";import"./Overlay-DLZe99GC.js";import"./ButtonView-xOdWsCh6.js";import"./Heading-C4_OUEWY.js";const $r={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,$r as default};
