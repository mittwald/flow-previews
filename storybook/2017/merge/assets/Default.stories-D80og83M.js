import{j as r}from"./iframe-ygucezpU.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-Cs0D7_PK.js";import{L as m}from"./Link-DPVICX3j.js";import{H as s}from"./HeaderNavigation-vTeKMofC.js";import{B as o}from"./Button-Dsp-uMAe.js";import{T as p}from"./Text-c8GLfZrX.js";import{I as C}from"./Image-BL8Rj3qY.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-bkcoc2qa.js";import{b as y,C as A,M as c}from"./ContextMenuSection-CLZ0Yijm.js";import{a as D,M as E}from"./Modal-nqn6nDyn.js";import{H as G}from"./Heading-CwsWyhxJ.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv8w3zYd.js";import"./mergeRefs-C0ZYRiin.js";import"./index-BaLSpMVi.js";import"./useLocalizedStringFormatter-TZqZqT18.js";import"./context-DzmzBjoy.js";import"./utils-Dm2BIGqk.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BqrMcV_T.js";import"./useFocus-BBcZge3l.js";import"./useFocusRing-CFbBFNPO.js";import"./useFocusable-CmrOOHc4.js";import"./dynamic-DtVcInqU.js";import"./LoadingSpinner-DHdSJfkf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CrpDhUsv.js";import"./ProgressBar-CbOwlFL2.js";import"./Label-BffVQixZ.js";import"./Hidden-sZrOLhP9.js";import"./useLabel-BIOlG5Yn.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BpjCDOvP.js";import"./EmulatedBoldText-oasbrdcJ.js";import"./Text-DGTV1FYP.js";import"./AlertIcon-BoY9zsTJ.js";import"./Action-M3zsMwUk.js";import"./context-stas4iuT.js";import"./useStatic-B18UmQuP.js";import"./getActionGroupSlot-igF58ako.js";import"./Popover-BoT9uJpy.js";import"./DialogTriggerView-C9zXFnun.js";import"./RSPContexts-Bg25W6Pr.js";import"./ClearPropsContextView-DkeNy3v-.js";import"./useControlledState-y1NsnI_K.js";import"./FocusScope-kmUkL49h.js";import"./useCollator-CZ70YDPg.js";import"./VisuallyHidden-CIvyEb44.js";import"./Collection-CP_tcz-x.js";import"./CollectionBuilder-ZRNciRSk.js";import"./context-Bf2zQWgY.js";import"./Separator-CbVhXDvO.js";import"./SelectionManager-D4AWNFz3.js";import"./useEvent-Dau2XfVg.js";import"./Switch-D6rmBzD3.js";import"./Label-CDLmKIyL.js";import"./useToggleState-CLa0kjOM.js";import"./useFormReset-CqyvH-u7.js";import"./Overlay-eF-mhT6X.js";import"./ButtonView-Bw_s-3N9.js";import"./Heading-Bxqgoihn.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
