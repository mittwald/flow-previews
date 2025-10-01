import{j as r}from"./iframe-BA6fDn45.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-RvG5V2Gg.js";import{L as m}from"./Link-B4XMGLK_.js";import{H as s}from"./HeaderNavigation-C_uyYEPS.js";import{B as o}from"./Button-CMSL1MHe.js";import{T as p}from"./Text-BB_jWM0A.js";import{I as B}from"./Image-BlwkOVYP.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BbZkFjjG.js";import{C as y,M as c}from"./MenuItem-BaO9pyEM.js";import{C as A}from"./ContextMenuTrigger-CuWmq5qf.js";import"./ContextMenuSection-BgHMRQz7.js";import{a as D,M as E}from"./Modal-D1nn6HX8.js";import{H as G}from"./Heading-BL-NFR7s.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DAuYRjCP.js";import"./index-DovfTAQ1.js";import"./index-DorRoXow.js";import"./useLocalizedStringFormatter-CoI3i-Zj.js";import"./context-D6O0cSe8.js";import"./utils-B0PKDg6J.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BQkI-aJ9.js";import"./useFocus-DSzhmy1b.js";import"./useFocusRing-BRVUU_95.js";import"./useFocusable-20QGmjfJ.js";import"./dynamic-B5xcbnuy.js";import"./LoadingSpinner-Dgd8j7jz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DSXpZTIL.js";import"./ProgressBar-BfpmuxQQ.js";import"./Label-CM7Rtudl.js";import"./Hidden-BWmE1vDO.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BAFOwcQV.js";import"./EmulatedBoldText-Dom6ilWt.js";import"./Text-BlF9rzJU.js";import"./AlertIcon-DDEyl0EN.js";import"./Action-CxZ_aWnU.js";import"./context-aU6YV9zZ.js";import"./useStatic-Dc3NgXvq.js";import"./getActionGroupSlot-DOaaGACl.js";import"./Popover-B2jQdqM2.js";import"./useOverlayController-ni00yHWz.js";import"./OverlayContextProvider-DpcAFO97.js";import"./Dialog-CYKhgjuk.js";import"./RSPContexts-BrsSHeal.js";import"./OverlayArrow-DBwRAJ-a.js";import"./useControlledState-DgfMlGIn.js";import"./Collection-D4YkJ3N5.js";import"./CollectionBuilder-CyubYm4y.js";import"./context-DwuzVRtg.js";import"./Separator-CFMHi57C.js";import"./SelectionManager-DMXqcscO.js";import"./useEvent-D6ZMwboe.js";import"./useCollator-ynWs3FsB.js";import"./FocusScope-B1mU0Ypz.js";import"./VisuallyHidden-D1tpk_Z3.js";import"./ClearPropsContextView-Dalrb-H-.js";import"./Switch-CNXeBpSj.js";import"./useMakeFocusable-BwZeESMO.js";import"./useToggleState-Bf4nXT1y.js";import"./useFormReset-DffYIxF4.js";import"./OverlayTrigger-1DDUfac8.js";import"./ControlledNotification-0PvNb2Qc.js";import"./DialogTriggerView-Bh79vjBT.js";import"./Overlay-CEtKKwGG.js";import"./ButtonView-DryvcFf5.js";import"./Heading-BAuF_2Ob.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
