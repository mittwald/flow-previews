import{j as r}from"./iframe-CP2gb4h4.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-D-rMLbvq.js";import{L as m}from"./Link-CILbJhld.js";import{H as s}from"./HeaderNavigation-CaGyIXmL.js";import{B as o}from"./Button-D4XL1rEM.js";import{T as p}from"./Text-D1BFrV-v.js";import{I as B}from"./Image-DTchR9zO.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-US9YXzr0.js";import{C as y,M as c}from"./MenuItem-BeEao0xu.js";import{C as A}from"./ContextMenuTrigger-CBk7wtnX.js";import"./ContextMenuSection-DLwH6dLj.js";import{a as D,M as E}from"./Modal-DvbjVNbG.js";import{H as G}from"./Heading-BHZCyk50.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPf_B31n.js";import"./index-BSCJfbqF.js";import"./index-Cu5Se3_L.js";import"./useLocalizedStringFormatter-JiHDNkwa.js";import"./context-BA56fXp2.js";import"./utils-D_s8y5un.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-B35msVos.js";import"./useFocus-DJT_GDyJ.js";import"./useFocusRing-B2VMeUUD.js";import"./useFocusable-B9L3OVB4.js";import"./dynamic-BzAgy5gg.js";import"./LoadingSpinner-CCoJakpE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BqMMv05B.js";import"./ProgressBar-antzpYY8.js";import"./Label-683tI7vQ.js";import"./Hidden-BIuobSa8.js";import"./useLabel-INWae1Ce.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cy2PTbDb.js";import"./EmulatedBoldText-DPtC43a-.js";import"./Text-CxBtgOGW.js";import"./AlertIcon-BEfX6-8v.js";import"./Action-BlPiRLea.js";import"./context-DCT4qJcM.js";import"./useStatic-B6aSEDsB.js";import"./getActionGroupSlot-BJG8VOJK.js";import"./Popover-DiNyTyGh.js";import"./useOverlayController-BHsxb3JP.js";import"./OverlayContextProvider-BzrNIylh.js";import"./Dialog-BATijwiU.js";import"./RSPContexts-CjMIBS3_.js";import"./OverlayArrow-DcwP4WPp.js";import"./useControlledState-4L3XIdhl.js";import"./Collection-O2YnEgLD.js";import"./CollectionBuilder-Cm1DEo3g.js";import"./context-ScZH95Xu.js";import"./Separator-DiCclCCI.js";import"./SelectionManager-Dx1qQpQA.js";import"./useEvent-rLgwngju.js";import"./useCollator-CVHtnlLz.js";import"./FocusScope-8zrVT8FZ.js";import"./VisuallyHidden-GZJ9Ibhy.js";import"./ClearPropsContextView-YbrwDHkX.js";import"./Switch-BIHCXlxV.js";import"./Label-Bjeja2lg.js";import"./useToggleState-Neuz-13g.js";import"./useFormReset-DVyobQZd.js";import"./OverlayTrigger-DMAetqx7.js";import"./ControlledNotification-DPwgQBkl.js";import"./DialogTriggerView-BC-YGFEK.js";import"./Overlay-brVoBJ7U.js";import"./ButtonView-BW7lV1rS.js";import"./Heading-p8z_hoTT.js";const $r={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
